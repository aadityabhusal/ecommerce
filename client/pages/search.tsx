import Head from "next/head";
import { PageContainer } from "@components/common";
import { PageTitle, Section } from "@components/ui";
import { useRouter } from "next/router";
import {
  ResultSection,
  HeadSection,
  FilterPanel,
  FilterBar,
} from "@components/search";

export default function Search() {
  let router = useRouter();
  return (
    <div>
      <Head>
        <title>Gharagan - Your Doorstep Shopping</title>
        <meta name="description" content="Gharagan - Your Doorstep Shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeadSection>
          <PageTitle>Results for &quot;{router.query.search}&quot;</PageTitle>
          <FilterBar />
        </HeadSection>
        <Section flex>
          <FilterPanel />
          <ResultSection />
        </Section>
      </PageContainer>
    </div>
  );
}
