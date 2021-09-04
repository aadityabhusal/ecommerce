import styled from "styled-components";

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.pageTitle};
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.sectionTitle};
`;

export const SubSectionTitle = styled.h3`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.subSectionTitle};
`;

/* 
  The props of Heading are passed to the child components
  To avoid passing them, the props are destructured

const LargeHeading = styled(({ active, ...rest }) => <PageTitle {...rest} />)<{
  active: boolean;
}>`
  color: ${(props) => (props.active ? "red" : "blue")};
`;
*/
