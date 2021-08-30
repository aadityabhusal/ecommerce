import styled from "styled-components";

export const Heading = styled.h1`
  color: #ff5858;
  font-size: ${({ theme }) => theme.fontSizes.heading1};
`;

/* 
  The props of Heading are passed to the child components
  To avoid passing them, the props are destructured
*/
const LargeHeading = styled(({ active, ...rest }) => <Heading {...rest} />)<{
  active: boolean;
}>`
  color: ${(props) => (props.active ? "red" : "blue")};
`;
