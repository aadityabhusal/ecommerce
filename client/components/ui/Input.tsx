import styled from "styled-components";

interface IInput {
  width?: string;
  font?: string;
}

export const Input = styled.input<IInput>`
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  ${({ width }) => `width: ${width ? width : "100%"};`}
  ${({ font }) => font && `font-size: ${font};`}
`;

export const CheckBox = styled.input`
  margin-right: 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.border}; ;
`;

export const Select = styled.select<IInput>`
  outline: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.secondary};
  ${({ width }) => width && `width: ${width};`}
  ${({ font }) => font && `font-size: ${font};`}
`;
