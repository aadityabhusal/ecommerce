import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.background.primary};
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
