import styled, { css, keyframes } from "styled-components";

interface StyledProps {
  children: String;
  primary?: Boolean;
  times?: number;
}

const shake = keyframes`
0%{
  transform: translate(0, 0)
}
20%{
  transform: translate(10px, 0)
}
40%{
  transform: translate(-10px, 0)
}
60%{
  transform: translate(10px, 0)
}
80%{
  transform: translate(-10px, 0)
}
100%{
  transform: translate(0, 0)
}
`;

export const StyledButton = styled.button<StyledProps>`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${({ primary, theme }) =>
    primary ? theme.background.primary : theme.background.secondary};
  color: ${({ primary, theme }) =>
    primary ? theme.color.primary : theme.color.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    animation: ${shake} 0.5s ease-in-out 0s 1 alternate none;
  }
  ${({ times }) =>
    times &&
    css`
      padding: ${times * 10}px;
      font-size: ${times * 15}px;
    `}
`;

export const PrimaryButton = ({ primary, children }: StyledProps) => {
  return <StyledButton primary>{children}</StyledButton>;
};

export const NormalButton = ({ children }: StyledProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export const LargeButton = ({ times, children }: StyledProps) => {
  return <StyledButton times={times}>{children}</StyledButton>;
};
