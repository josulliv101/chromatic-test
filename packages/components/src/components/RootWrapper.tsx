import {
  ChakraProvider,
  ChakraProviderProps,
  CSSReset,
} from "@chakra-ui/react";
import React from "react";
import {
  ChromaticTestProvider,
  ChromaticTestProviderProps,
} from "./ChromaticTestProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface RootWrapperProps {
  theme: ChakraProviderProps["theme"];
  chromaticTestProviderValue: ChromaticTestProviderProps;
}

const queryClient = new QueryClient();

export const RootWrapper: React.FC<RootWrapperProps> = ({
  theme,
  chromaticTestProviderValue,
  children,
}) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ChromaticTestProvider value={chromaticTestProviderValue}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </ChromaticTestProvider>
    </ChakraProvider>
  );
};
