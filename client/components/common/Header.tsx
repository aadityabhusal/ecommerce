import styled from "styled-components";
import { Logo, Search, Menu } from "@components/ui";

const HeaderSection = styled.header``;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
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
