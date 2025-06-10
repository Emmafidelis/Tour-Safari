"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { Toaster } from "./toaster";
import { system } from "../../theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark">
        {children}
        <Toaster />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
