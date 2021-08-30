import styled from "styled-components";
import { Link, List, MenuItem, MenuItemIcon } from "@components/ui";
import { ThLarge, User, CaretDown } from "@styled-icons/fa-solid";
import { CategoriesDropDown } from "@components/common";
import { useRef, useState } from "react";

const NavigationSection = styled.nav`
  box-shadow: 0 5px 4px -3px ${({ theme }) => theme.colors.shadow};
  position: relative;
`;

const NavigationContent = styled.div`
  padding: 1rem 5rem;
`;

const CategoriesMenuList = styled(List)`
  align-items: center;
`;

const CategoriesMenuItem = styled(MenuItem)`
  a {
    flex-direction: column;
    text-align: center;
    padding: 0 2rem;
  }

  div {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const CategoriesIcon = styled(CategoriesMenuItem)`
  margin-right: 3rem;
  padding-right: 3rem;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.menuItem};
`;

export function Navigation() {
  const [dropdown, setDropDown] = useState(false);
  const categoriesDropdown = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    if (categoriesDropdown.current) {
      categoriesDropdown.current.style.display = dropdown ? "none" : "block";
      setDropDown(!dropdown);
    }
  };

  return (
    <NavigationSection>
      <NavigationContent>
        <CategoriesMenuList>
          <CategoriesIcon onClick={handleDropdown}>
            <MenuItemIcon>
              <ThLarge size="30" color="inherit" />
            </MenuItemIcon>
            <span>
              Categories
              <CaretDown size="20" color="inherit" />
            </span>
          </CategoriesIcon>
          {/* Loop Starts Here */}
          <CategoriesMenuItem>
            <Link href="/" inherit>
              <MenuItemIcon>
                <User size="30" color="inherit" />
              </MenuItemIcon>
              <span>Men</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/" inherit>
              <MenuItemIcon>
                <User size="30" color="inherit" />
              </MenuItemIcon>
              <span>Women</span>
            </Link>
          </CategoriesMenuItem>
        </CategoriesMenuList>
      </NavigationContent>
      <CategoriesDropDown ref={categoriesDropdown} />
    </NavigationSection>
  );
}
