import React from "react";
import { GoogleLogin, GoogleOAuthProvider, type CredentialResponse } from "@react-oauth/google";
import { ENV } from "../../core/config/env";

// Google Identity Services render options
export type GoogleButtonTheme = "outline" | "filled_blue" | "filled_black";
export type GoogleButtonSize = "small" | "medium" | "large";
export type GoogleButtonShape = "rectangular" | "pill" | "circle" | "square";
export type GoogleButtonText = "signin_with" | "signup_with" | "continue_with" | "signin";
export type GoogleButtonLogoAlignment = "left" | "center";

export type GoogleLoginButtonProps = {
  onSuccess: (response: CredentialResponse) => void;
  onError?: (reason: string) => void;
  className?: string;
  // Options forwarded to GIS button renderer
  theme?: GoogleButtonTheme;
  size?: GoogleButtonSize;
  shape?: GoogleButtonShape;
  text?: GoogleButtonText;
  logoAlignment?: GoogleButtonLogoAlignment;
  width?: number; // pixel width for the rendered button
  useOneTap?: boolean;
};

export default function GoogleLoginButton({
  onSuccess,
  onError,
  className,
  theme = "outline",
  size = "large",
  shape = "rectangular",
  text = "signin_with",
  logoAlignment = "center",
  width,
  useOneTap = false,
}: GoogleLoginButtonProps) {
  if (!ENV.GOOGLE_CLIENTID) {
    // Fail fast if misconfigured
    onError?.("Missing Google Client ID configuration");
    return null;
  }

  return (
    <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENTID}>
      <div className={className}>
        <GoogleLogin
          onSuccess={(res) => {
            if (res?.credential) onSuccess(res);
            else onError?.("Google did not return a credential");
          }}
          onError={() => onError?.("Google Login failed")}
          theme={theme}
          size={size}
          shape={shape}
          text={text}
          logo_alignment={logoAlignment}
          width={width}
          useOneTap={useOneTap}
        />
      </div>
    </GoogleOAuthProvider>
  );
}
