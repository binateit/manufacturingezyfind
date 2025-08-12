type GoogleCredentialResponse = { credential?: string };

interface GoogleAccountsIdApi {
  initialize(config: { client_id: string; callback: (response: GoogleCredentialResponse) => void }): void;
  renderButton(parent: HTMLElement, options?: Record<string, unknown>): void;
}

interface GoogleApi {
  accounts: { id: GoogleAccountsIdApi };
}

type FacebookLoginResponse = { authResponse?: { accessToken?: string } };

interface FacebookSdkApi {
  init(config: { appId: string; cookie?: boolean; xfbml?: boolean; version: string }): void;
  login(callback: (response: FacebookLoginResponse) => void, options?: { scope?: string }): void;
}

declare global {
  interface Window {
    google?: GoogleApi;
    FB?: FacebookSdkApi;
    fbAsyncInit?: () => void;
  }
}
export {};
