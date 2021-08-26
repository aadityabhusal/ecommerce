import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProduct } from "@interfaces/index";
import { Link } from "@components/ui";

export default function User({ productData }: { productData: IProduct }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{productData.title} - Gharagan</title>
      </Head>
      <p>Id: {productData.id}</p>
      <p>First Name: {productData.title}</p>
      <p>Last Name: {productData.description}</p>
      <p>----------------------------</p>
      <NextLink href="/user" passHref>
        <Link>Go to User Page</Link>
      </NextLink>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = await (
    await fetch(`http://localhost:3000/api/product/${params.id}`)
  ).json();

  return {
    revalidate: 10,
    props: { productData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await (
    await fetch("http://localhost:3000/api/product")
  ).json();

  const productIds = products.map((item: IProduct) => ({
    params: {
      id: item.id,
    },
  }));

  return {
    paths: productIds,
    fallback: true,
  };
};
