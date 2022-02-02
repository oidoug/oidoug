import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { themes } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: themes.light.className,
        dark: themes.dark.className,
      }}
    >
      <NextUIProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
