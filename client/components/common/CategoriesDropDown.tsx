import styled from "styled-components";
import { Heading } from "@components/ui";
import { forwardRef, Ref } from "react";

const CategoriesDropDownSection = styled.div`
  position: absolute;
  display: none;
  left: 0;
  width: 100vw;
  height: 15rem;
  background-color: #bbbbbb;
`;

const CategoriesDropDownContent = styled.div`
  padding: 5px 10px;
`;

const CategoriesDropDownRef = ({}, ref: Ref<HTMLDivElement>) => {
  return (
    <CategoriesDropDownSection id="categories-dropdown" ref={ref}>
      <CategoriesDropDownContent>
        <Heading>CategoriesDropDown</Heading>
      </CategoriesDropDownContent>
    </CategoriesDropDownSection>
  );
};

export const CategoriesDropDown = forwardRef(CategoriesDropDownRef);
