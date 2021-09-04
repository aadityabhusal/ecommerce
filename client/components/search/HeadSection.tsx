import { FC } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.background.highlight};
  padding: 2rem 4rem;
  padding-bottom: 0.5rem;
  h1 {
    margin-bottom: 4rem;
  }
`;

export const HeadSection: FC = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};
