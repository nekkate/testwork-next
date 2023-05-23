import { Footer } from "@/components/block/footer/footer";
import { Header } from "@/components/block/header/header";
import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
