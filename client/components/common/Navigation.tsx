import styled from "styled-components";
import { Link, List, MenuItem, MenuItemIcon } from "@components/ui";
import {
  ThLarge,
  Male,
  CaretDown,
  Female,
  Tv,
  Book,
  Guitar,
  PaintBrush,
  Hammer,
} from "@styled-icons/fa-solid";
import { DropDown } from "@components/common";
import { useEffect, useRef, useState } from "react";

const NavigationSection = styled.nav`
  box-shadow: 0 8px 6px -4px ${({ theme }) => theme.color.shadow};
  position: relative;
  z-index: 99;
  margin-bottom: 1rem;
`;

const NavigationContent = styled.div`
  padding: 0.5rem 4rem;
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
    margin-bottom: 0.2rem;
  }
`;

const CategoriesIcon = styled(CategoriesMenuItem)`
  margin-right: 2rem;
  padding-right: 3rem;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.fontSizes.menuItem};
`;

export function Navigation() {
  const [dropdown, setDropDown] = useState(false);
  const categoriesDropdown = useRef<HTMLDivElement>(null);
  const categoriesButton = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleDropdown = (e: any) => {
      if (!categoriesDropdown.current?.contains(e.target)) {
        document.removeEventListener("click", handleDropdown, true);
        setDropDown(false);
      }
    };

    if (dropdown) {
      document.addEventListener("click", handleDropdown, true);
    }
  }, [dropdown]);

  return (
    <NavigationSection>
      <NavigationContent>
        <CategoriesMenuList>
          <CategoriesIcon
            ref={categoriesButton}
            onClick={() => setDropDown(true)}
          >
            <MenuItemIcon>
              <ThLarge size="25" color="inherit" />
            </MenuItemIcon>
            <span>
              Categories
              <CaretDown size="20" color="inherit" />
            </span>
          </CategoriesIcon>
          {/* Loop Starts Here */}
          <CategoriesMenuItem>
            <Link href="/category/men" inherit>
              <MenuItemIcon>
                <Male size="25" color="inherit" />
              </MenuItemIcon>
              <span>Men</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/women" inherit>
              <MenuItemIcon>
                <Female size="25" color="inherit" />
              </MenuItemIcon>
              <span>Women</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/electronics" inherit>
              <MenuItemIcon>
                <Tv size="25" color="inherit" />
              </MenuItemIcon>
              <span>Electronics</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/stationary" inherit>
              <MenuItemIcon>
                <Book size="25" color="inherit" />
              </MenuItemIcon>
              <span>Stationary</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/musical-instruments" inherit>
              <MenuItemIcon>
                <Guitar size="25" color="inherit" />
              </MenuItemIcon>
              <span>Musical Instruments</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/health-beauty" inherit>
              <MenuItemIcon>
                <PaintBrush size="25" color="inherit" />
              </MenuItemIcon>
              <span>Health & Beauty</span>
            </Link>
          </CategoriesMenuItem>
          <CategoriesMenuItem>
            <Link href="/category/gadgets" inherit>
              <MenuItemIcon>
                <Hammer size="25" color="inherit" />
              </MenuItemIcon>
              <span>Gadgets</span>
            </Link>
          </CategoriesMenuItem>
        </CategoriesMenuList>
      </NavigationContent>
      {dropdown && <DropDown ref={categoriesDropdown} />}
    </NavigationSection>
  );
}
