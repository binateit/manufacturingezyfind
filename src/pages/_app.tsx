import "@/styles/globals.css";
import "@/styles/animations.css";
import TailwindProvider from "@/providers/TailwindProvider";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "@/components/layouts/RootLayout";
import { AppUIProvider } from "@/providers/AppUIProvider";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/useApollo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';
// import { GoogleTagManager } from '@next/third-parties/google'
// import { ENV } from "@/core/config/env";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  adjustFontFallback: true,   // keeps layout steady
  preload: true
})

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <div className={poppins.className}>
        {/* Global ToastContainer for toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000} // Automatically close toast after 5 seconds
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ApolloProvider client={apolloClient}>
          <AppUIProvider>
            <TailwindProvider>
              <CookiesProvider>
                <RootLayout>
                  <Component {...pageProps} />
                  {/* <GoogleTagManager gtmId={ENV.GOOGLE_TAG_MANAGER_KEY} /> */}
                </RootLayout>
              </CookiesProvider>
            </TailwindProvider>
          </AppUIProvider>
        </ApolloProvider>
      </div>
    </>
  );
}
