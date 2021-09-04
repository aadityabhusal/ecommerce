import Head from "next/head";
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
      <p>Title: {productData.title}</p>
      <p>Description: {productData.short_description}</p>
      <p>----------------------------</p>
      <Link href="/user">Go to User Page</Link>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productData = await (
    await fetch(`http://localhost:3000/api/product/${params.slug}`)
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
      slug: item.slug,
    },
  }));

  return {
    paths: productIds,
    fallback: true,
  };
};
