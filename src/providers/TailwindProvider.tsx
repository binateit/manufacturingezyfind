"use client";

import React, { useMemo } from "react";
import { PrimeReactContext } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";
import { primeReactStyles } from "@/styles/primereact/primereactStyles";

type Props = {
  children: React.ReactNode;
};

export default function TailwindProvider({ children }: Props) {
  // ❌ DO NOT wrap this in useMemo (violates React rules of hooks)
  const ptConfig = usePassThrough(Tailwind, primeReactStyles, {
    mergeSections: true,
    mergeProps: false,
  });

  const contextValue = useMemo(
    () => ({
      unstyled: true,
      pt: ptConfig,
      zIndex: {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100,
      },
    }),
    [ptConfig]
  );

  return (
    <PrimeReactContext.Provider value={contextValue}>
      {children}
    </PrimeReactContext.Provider>
  );
}
