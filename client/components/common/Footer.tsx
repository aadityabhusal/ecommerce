import styled from "styled-components";
import { Heading } from "@components/ui";

const FooterSection = styled.footer``;

const FooterContent = styled.div`
  padding: 5px 10px;
`;

export function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <Heading>Footer</Heading>
      </FooterContent>
    </FooterSection>
  );
}
