import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GUEST_LOGIN } from "../graphql/queries/guest-login";

const TOKEN_KEY = "access_token";
const VALID_TO_KEY = "access_token_valid_to";
const IS_GUEST_TOKEN = "is_guest_token";
const FIRST_NAME_KEY = "first_name";
const LAST_NAME_KEY = "last_name";
const EXPIRY_BUFFER_MS = 60 * 1000; // 1 minute buffer

const isStaticBuild = () => process.env.BUILD_MODE === "static";

const guestTokenClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API || "",
  cache: new InMemoryCache(),
});

export class TokenService {
  private tokenPromise: Promise<string | null> | null = null;

  private getStorage(key: string): string | null {
    if (typeof window === "undefined") return null;
    if (isStaticBuild()) return localStorage.getItem(key);
    const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
  }

  private setStorage(key: string, value: string, expires?: string) {
    if (typeof window === "undefined") return;
    if (isStaticBuild()) {
      localStorage.setItem(key, value);
    } else {
      document.cookie = `${key}=${encodeURIComponent(value)}; path=/; expires=${expires}`;
    }
  }

  getToken(): string | null {
    return this.getStorage(TOKEN_KEY);
  }

  getUserName(): string | null {
    if (typeof window === "undefined") return null;
    const firstName = this.getStorage(FIRST_NAME_KEY);
    const lastName = this.getStorage(LAST_NAME_KEY);
    return firstName && lastName ? `${firstName} ${lastName}` : null;
  }

  setGuestToken(token: string, validTo: string) {
    const expires = new Date(validTo).toUTCString();
    this.setStorage(TOKEN_KEY, token, expires);
    this.setStorage(VALID_TO_KEY, validTo, expires);
    this.setStorage(IS_GUEST_TOKEN, JSON.stringify(true), expires);
  }

  setLoggedUserDetail(token: string, validTo: string, first_name: string, last_name: string) {
    const expires = new Date(validTo).toUTCString();
    this.setStorage(TOKEN_KEY, token, expires);
    this.setStorage(VALID_TO_KEY, validTo, expires);
    this.setStorage(IS_GUEST_TOKEN, JSON.stringify(false), expires);
    this.setStorage(FIRST_NAME_KEY, first_name, expires);
    this.setStorage(LAST_NAME_KEY, last_name, expires);
  }

  isGuest(): boolean {
    const raw = this.getStorage(IS_GUEST_TOKEN);
    if (raw == null) return true; // default to guest if not set
    try {
      return JSON.parse(raw) === true;
    } catch {
      return true;
    }
  }

  isExpired(): boolean {
    const validTo = this.getStorage(VALID_TO_KEY);
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
          this.setGuestToken(result.value, result.validTo);
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
      localStorage.removeItem(IS_GUEST_TOKEN);
      localStorage.removeItem(FIRST_NAME_KEY);
      localStorage.removeItem(LAST_NAME_KEY);
    } else {
      document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${VALID_TO_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${IS_GUEST_TOKEN}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${FIRST_NAME_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${LAST_NAME_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}

export const tokenService = new TokenService();
