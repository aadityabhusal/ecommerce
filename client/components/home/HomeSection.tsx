import { ProductCard } from "@components/product";
import { SectionTitle, Section, SectionList } from "@components/ui";
import styled from "styled-components";

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;

  div {
    flex: 1;
    border-radius: 100%;
    margin-left: 10rem;
    border: 1px solid ${({ theme }) => theme.color.border};
  }
`;

interface IHomeSection {
  title: string;
}

export function HomeSection({ title }: IHomeSection) {
  return (
    <Section>
      <SectionHead>
        <SectionTitle>{title}</SectionTitle>
        <div></div>
      </SectionHead>
      <SectionList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionList>
    </Section>
  );
}
