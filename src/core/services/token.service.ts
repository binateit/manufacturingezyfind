import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GUEST_LOGIN } from "../graphql/queries/guest-login";

const TOKEN_KEY = "access_token";
const VALID_TO_KEY = "access_token_valid_to";
const EXPIRY_BUFFER_MS = 60 * 1000; // 1 minute buffer

const isStaticBuild = () => process.env.BUILD_MODE === "static";

const guestTokenClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API || "",
  cache: new InMemoryCache(),
});

export class TokenService {
  private tokenPromise: Promise<string | null> | null = null;

  getToken(): string | null {
    if (typeof window === "undefined") return null;

    if (isStaticBuild()) {
      return localStorage.getItem(TOKEN_KEY);
    }

    const match = document.cookie.match(/(^| )access_token=([^;]+)/);
    return match ? decodeURIComponent(match[2]) : null;
  }

  setToken(token: string, validTo: string) {
    if (typeof window === "undefined") return;

    const expires = new Date(validTo).toUTCString();

    if (isStaticBuild()) {
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(VALID_TO_KEY, validTo);
    } else {
      document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; path=/; expires=${expires}`;
      document.cookie = `${VALID_TO_KEY}=${encodeURIComponent(validTo)}; path=/; expires=${expires}`;
    }
  }

  isExpired(): boolean {
    if (typeof window === "undefined") return true;

    let validTo: string | null = null;

    if (isStaticBuild()) {
      validTo = localStorage.getItem(VALID_TO_KEY);
    } else {
      const match = document.cookie.match(/(^| )access_token_valid_to=([^;]+)/);
      validTo = match ? decodeURIComponent(match[2]) : null;
    }

    if (!validTo) return true;

    const expiryTime = new Date(validTo).getTime();
    return Date.now() + EXPIRY_BUFFER_MS > expiryTime;
  }

  async fetchNewToken(): Promise<string | null> {
    if (!process.env.NEXT_PUBLIC_GRAPHQL_API) {
      console.error("Missing NEXT_PUBLIC_GRAPHQL_API");
      return null;
    }

    if (this.tokenPromise) return this.tokenPromise;

    this.tokenPromise = guestTokenClient
      .query({
        query: GUEST_LOGIN,
        fetchPolicy: "no-cache",
      })
      .then(res => {
        const result = res?.data?.guestLogin?.result;
        if (result?.value && result?.validTo) {
          this.setToken(result.value, result.validTo);
          return result.value;
        }
        return null;
      })
      .catch(err => {
        console.error("Guest token fetch failed:", err);
        return null;
      })
      .finally(() => {
        this.tokenPromise = null;
      });

    return this.tokenPromise;
  }

  async getValidToken(): Promise<string | null> {
    const token = this.getToken();
    if (token && !this.isExpired()) {
      return token;
    }

    return await this.fetchNewToken();
  }

  clearToken() {
    if (typeof window === "undefined") return;

    if (isStaticBuild()) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(VALID_TO_KEY);
    } else {
      document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${VALID_TO_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}

export const tokenService = new TokenService();
