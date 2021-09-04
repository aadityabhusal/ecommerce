import { FC } from "react";
import styled from "styled-components";
import { List } from "@components/ui";

interface ISection {
  flex?: boolean;
}

const SectionContainer = styled.section<ISection>`
  margin: 0 4rem;
  margin-bottom: 4rem;
  ${({ flex }) => flex && "display: flex;"}
`;

export const Section: FC<ISection> = ({ children, flex }) => {
  return <SectionContainer flex={flex}>{children}</SectionContainer>;
};

export const SectionList = styled(List)`
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;
