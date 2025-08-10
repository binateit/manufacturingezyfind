import "@/styles/globals.css";
import "@/styles/animations.css";
import TailwindProvider from "@/providers/TailwindProvider";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "@/components/layouts/RootLayout";
import { AppUIProvider } from "@/providers/AppUIProvider";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/useApollo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from 'react-cookie';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
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
      <AppUIProvider>
        <TailwindProvider>
          <ApolloProvider client={apolloClient}>
            <CookiesProvider>
              <RootLayout>
                <Component {...pageProps} />
              </RootLayout>
            </CookiesProvider>
          </ApolloProvider>
        </TailwindProvider>
      </AppUIProvider>
    </>
  );
}
