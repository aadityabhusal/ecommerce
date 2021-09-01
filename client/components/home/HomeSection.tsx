import { ProductCard } from "@components/product";
import { List } from "@components/ui";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin: 0 4rem;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  color: ${({ theme }) => theme.color.primary};
  margin: 1rem;

  div {
    flex: 1;
    border-radius: 100%;
    margin-left: 10rem;
    border: 1px solid ${({ theme }) => theme.color.border};
  }
`;
const SectionList = styled(List)`
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

interface IHomeSection {
  title: string;
}

export function HomeSection({ title }: IHomeSection) {
  return (
    <SectionContainer>
      <SectionTitle>
        {title}
        <div></div>
      </SectionTitle>
      <SectionList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SectionList>
    </SectionContainer>
  );
}
