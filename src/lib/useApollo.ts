import { useMemo } from "react";
import { initializeApollo } from "./apolloClient";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export function useApollo(initialState: NormalizedCacheObject | null): ApolloClient<NormalizedCacheObject> {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
