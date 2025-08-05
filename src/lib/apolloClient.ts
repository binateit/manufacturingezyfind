// src/lib/apollo-client.ts

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
  NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { tokenService } from "@/core/services/token.service";
import { Observable } from "@apollo/client/utilities";
import fetch from "cross-fetch";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    fetch,
  });

  const authLink = new ApolloLink((operation, forward) => {
    return new Observable(observer => {
      (async () => {
        try {
          const token = await tokenService.getValidToken();

          if (token) {
            operation.setContext(({ headers = {} }) => ({
              headers: {
                ...headers,
                authorization: `Bearer ${token}`,
              },
            }));
          }

          const subscriber = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });

          return () => {
            subscriber.unsubscribe();
          };
        } catch (error) {
          observer.error(error);
        }
      })();
    });
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        console.error(`[GraphQL error]: Message: ${err.message}`);
      }
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  return new ApolloClient<NormalizedCacheObject>({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return apolloClient;
}
