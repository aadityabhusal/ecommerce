import styled from "styled-components";
import { Logo, Search, Menu } from "@components/ui";

const HeaderSection = styled.header``;

const HeaderContent = styled.div`
  display: flex;
  padding: 1rem 3rem;
`;

export function Header() {
  return (
    <HeaderSection>
      <HeaderContent>
        <Logo />
        <Search />
        <Menu />
      </HeaderContent>
    </HeaderSection>
  );
}
