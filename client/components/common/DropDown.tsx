import styled from "styled-components";
import { Link, List, MenuItem, SubSectionTitle } from "@components/ui";
import { forwardRef, Ref } from "react";
import { ChevronRight } from "@styled-icons/fa-solid";
import { ProductCard } from "@components/product";

const DropDownSection = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: 0 8px 6px -4px ${({ theme }) => theme.color.shadow};
`;

const DropDownContent = styled.div`
  padding: 2rem 5rem;
  display: flex;
`;

const DropDownMainList = styled(List)`
  flex: 0 0 20rem;
  flex-direction: column;
`;

const DropDownMainListItem = styled.li`
  padding: 1rem;
  border-radius: 0.1rem 1rem 1rem 0.1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.primary};
  &:hover {
    background-color: ${({ theme }) => theme.background.highlight};
  }
`;

const DropDownSubListSection = styled.div`
  flex: 0 0 18rem;
  margin-left: 5rem;
  margin-top: 0.6rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const DropDownSubList = styled(List)`
  flex-direction: column;
  li {
    padding: 0.4rem 0;
  }
`;

const DropDownProducts = styled.div`
  margin-top: 0.5rem;
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
          <DropDownMainListItem>
            <span>Electronics</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
          <DropDownMainListItem>
            <span>Stationary</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
          <DropDownMainListItem>
            <span>Musical Instruments</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
          <DropDownMainListItem>
            <span>Health & Beauty</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
          <DropDownMainListItem>
            <span>Gadgets</span>
            <ChevronRight size="20" color="inherit" />
          </DropDownMainListItem>
        </DropDownMainList>
        <DropDownSubListSection>
          <SubSectionTitle>Mens Product</SubSectionTitle>
          <DropDownSubList>
            <MenuItem>
              <Link href="#" inherit>
                Men Shoes
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Shirts
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Pants
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Glasses
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Boots
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Caps
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Jeans
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men Suits
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" inherit>
                Men T-shirts
              </Link>
            </MenuItem>
          </DropDownSubList>
        </DropDownSubListSection>
        <DropDownProducts>
          <SubSectionTitle>New Products</SubSectionTitle>
          <List>
            <ProductCard small />
            <ProductCard small />
            <ProductCard small />
            <ProductCard small />
          </List>
        </DropDownProducts>
      </DropDownContent>
    </DropDownSection>
  );
};

export const DropDown = forwardRef(DropDownRef);
