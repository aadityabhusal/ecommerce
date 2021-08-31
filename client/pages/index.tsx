import Head from "next/head";
import { HomeCarousel } from "@components/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gharagan - Your Doorstep Shopping</title>
        <meta name="description" content="Gharagan - Your Doorstep Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeCarousel />
      </main>
    </div>
  );
}
