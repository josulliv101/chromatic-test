import React from "react";

export interface ChromaticTestProviderProps {
  apiUrl: string;
}

export const ChromaticTestContext =
  React.createContext<ChromaticTestProviderProps>({
    apiUrl: "https://chromaticTest.io/api/",
  });

ChromaticTestContext.displayName = "ChromaticTestContext";

export const ChromaticTestProvider = ChromaticTestContext.Provider;
