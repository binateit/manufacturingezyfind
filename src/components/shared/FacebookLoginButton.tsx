"use client";
import React from "react";
import FacebookLogin, { SuccessResponse } from "@greatsumini/react-facebook-login";
import { ENV } from "@/core/config/env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


export type FacebookLoginButtonProps = {
  onSuccess: (response: SuccessResponse) => void;
  onError?: (reason: string) => void;
  className?: string;
  style?: React.CSSProperties;
  // Optional scopes; defaults include email and public_profile
  scope?: string;
  // Button label customization
  text?: string;
  showIcon?: boolean;
};

export default function FacebookLoginButton({
  onSuccess,
  onError,
  className,
  style,
  scope = "public_profile,email",
  text = "Continue with Facebook",
  showIcon = true,
}: FacebookLoginButtonProps) {
  if (!ENV.FACEBOOK_APPID) {
    onError?.("Missing Facebook App ID configuration");
    return null;
  }

  return (
    <FacebookLogin
      appId={ENV.FACEBOOK_APPID}
      scope={scope}
      onSuccess={(response: SuccessResponse) => {
        // response includes accessToken, id, name, email (if permitted), etc.
        onSuccess(response);
      }}
      onFail={(error) => {
        const reason = typeof error === "string" ? error : (error?.status || "Facebook Login failed");
        onError?.(reason);
      }}
      onProfileSuccess={() => {
        // optional: profile retrieval success, not mandatory to bubble
      }}
      className={className}
      style={style}
    >
      <span className="inline-flex items-center justify-center gap-2">
        {showIcon && (
          <FontAwesomeIcon icon={faFacebookF} width={16} className="text-[#1877F2]" />
        )}
        <span>{text}</span>
      </span>
    </FacebookLogin>
  );
}
