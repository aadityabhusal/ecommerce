import styled from "styled-components";
import { Heading, List } from "@components/ui";
import { forwardRef, Ref } from "react";
import { ChevronRight } from "@styled-icons/fa-solid";

const DropDownSection = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  width: 100vw;
  height: 15rem;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: 0 8px 6px -4px ${({ theme }) => theme.colors.shadow};
`;

const DropDownContent = styled.div`
  padding: 1rem 5rem;
  display: flex;
`;

const DropDownMainList = styled(List)`
  width: 25%;
  flex-direction: column;
`;

const DropDownMainListItem = styled.li`
  padding: 1rem;
  border-radius: 0.1rem 1rem 1rem 0.1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkHighlight};
  &:hover {
    background-color: ${({ theme }) => theme.background.highlight};
  }
`;

const DropDownSubListSection = styled.div``;

const DropDownSubList = styled(List)`
  flex-direction: column;
`;

const DropDownRef = ({}, ref: Ref<HTMLDivElement>) => {
  return (
    <DropDownSection id="categories-dropdown" ref={ref}>
      <DropDownContent>
        <DropDownMainList>
          <DropDownMainListItem>
            <span>Men</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
          <DropDownMainListItem>
            <span>Women</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
        </DropDownMainList>
        <DropDownSubListSection></DropDownSubListSection>
      </DropDownContent>
    </DropDownSection>
  );
};

export const DropDown = forwardRef(DropDownRef);
