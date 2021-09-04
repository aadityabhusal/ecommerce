import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IUser } from "@interfaces/index";
import { Link } from "@components/ui";
import { GetStaticProps } from "next";

export default function User({ userData }: { userData: IUser }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Email: {userData.email}</p>
      <p>----------------------------</p>
      <Link href="/">Go Home</Link>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const userData = await (await fetch("http://localhost:3000/api/user")).json();

  return {
    props: { userData },
  };
};

/* export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
 */
