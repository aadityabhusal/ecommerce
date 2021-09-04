import { ProductCard } from "@components/product";
import { SectionList } from "@components/ui";
import styled from "styled-components";

const SectionContainer = styled.div``;

export const ResultSection = () => {
  return (
    <SectionContainer>
      <SectionList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionList>
    </SectionContainer>
  );
};
