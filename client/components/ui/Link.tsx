import styled from "styled-components";
import NextLink, { LinkProps } from "next/link";
import { FC } from "react";

interface ILinkProps extends LinkProps {
  inherit?: boolean | null;
}

export const LinkTag = styled.a<ILinkProps>`
  color: ${({ theme, inherit }) => (inherit ? "inherit" : theme.color.link)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link: FC<ILinkProps> = ({ href, children, inherit }) => {
  return (
    <NextLink href={href} passHref>
      <LinkTag href="" inherit={inherit}>
        {children}
      </LinkTag>
    </NextLink>
  );
};
