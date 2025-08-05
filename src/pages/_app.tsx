import "@/styles/globals.css";
import "@/styles/animations.css";
import TailwindProvider from "@/providers/TailwindProvider";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import RootLayout from "@/components/layouts/RootLayout";
import { AppUIProvider } from "@/providers/AppUIProvider";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/useApollo";


config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <AppUIProvider>
      <TailwindProvider>
        <ApolloProvider client={apolloClient}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ApolloProvider>
      </TailwindProvider>
    </AppUIProvider>
  );
}
