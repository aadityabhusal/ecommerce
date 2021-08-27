import Header from "@components/common";
import { ThemeContextProvider } from "@contexts/ThemeContext";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeContextProvider>
        <Header />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
