import "../index.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
