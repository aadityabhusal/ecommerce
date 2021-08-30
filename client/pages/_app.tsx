import { Footer, Header, Navigation } from "@components/common";
import { TopBar } from "@components/common/TopBar";
import { ThemeContextProvider } from "@contexts/ThemeContext";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeContextProvider>
        <TopBar />
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
