import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { Link, StyledButton, Toggle } from "@components/ui";

export default function Test() {
  return (
    <div>
      <Head>
        <title>Gharagan - Your Doorstep Shopping</title>
        <meta name="description" content="Gharagan - Your Doorstep Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledButton>Hello</StyledButton>
        <NextImage
          alt="Profile Image"
          src="/logo.png"
          width={250}
          height={300}
        />
      </main>
    </div>
  );
}
