import styled from "styled-components";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext, useEffect } from "react";

const Wrapper = styled.label`
  position: relative;
  display: flex;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196f3;

    &:before {
      transform: translateX(26px);
    }
  }
`;

const Slider = styled.span`
  flex: 1;
  cursor: pointer;
  border-radius: 34px;
  background-color: #ccc;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;

    transition: 0.4s;
  }
`;

export const Toggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Input
        type="checkbox"
        name="toggle"
        onChange={(e) => toggleTheme(e)}
        defaultChecked={darkTheme}
      />
      <Slider />
    </Wrapper>
  );
};
