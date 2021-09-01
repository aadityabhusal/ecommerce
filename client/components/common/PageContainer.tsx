import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContainer: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
