import { ENV } from "@/core/config/env";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* App meta tags */}
        <meta name="apple-itunes-app" content={ENV.IPHONE_APP_ID} />
        <meta name="google-play-app" content={ENV.ANDROID_APP_ID} />
        <meta name="huawei-play-app" content={ENV.HUAWEI_APP_ID} />

        {/* Favicons */}
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />

        {/* Preconnect and preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/logo.webp" type="image/webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
