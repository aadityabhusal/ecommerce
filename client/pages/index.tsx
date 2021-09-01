import Head from "next/head";
import { HomeCarousel, HomeSection } from "@components/home";
import { PageContainer } from "@components/common";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gharagan - Your Doorstep Shopping</title>
        <meta name="description" content="Gharagan - Your Doorstep Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HomeCarousel />
        <HomeSection title="Trending Products" />
      </PageContainer>
    </div>
  );
}
