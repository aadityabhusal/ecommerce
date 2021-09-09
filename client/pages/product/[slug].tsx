import Head from "next/head";
import { PageTitle, Section } from "@components/ui";
import { PageContainer } from "@components/common";
import { ProductGallary, ProductInfo } from "@components/product";

// import { useRouter } from "next/router";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { IProduct } from "@interfaces/index";
// import { Link } from "@components/ui";
// Params
// { productData }: { productData: IProduct }
// const router = useRouter();

export default function User() {
  return (
    <>
      <Head>
        <title>Product Name - Gharagan</title>
      </Head>
      <PageContainer>
        <Section flex>
          <ProductGallary />
          <ProductInfo />
        </Section>
      </PageContainer>
    </>
  );
}

/* export const getStaticProps: GetStaticProps = async ({ params }) => {
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
 */
