import { ShoppingCart, Heart, User } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { List, Link } from "./index";

const MenuContainer = styled(List)`
  align-items: center;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.colors.secondary};
  a {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.menuItem};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.darkHighlight};
    div {
      background: ${({ theme }) => theme.background.highlight};
    }
  }
`;

export const MenuItemIcon = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-radius: 100%;
`;

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <Link href="/user/cart" inherit>
          <MenuItemIcon>
            <ShoppingCart size="30" color="inherit" />
          </MenuItemIcon>
          <span>Cart</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/user/wishlist" inherit>
          <MenuItemIcon>
            <Heart size="30" color="inherit" />
          </MenuItemIcon>
          <span>Wishlist</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/login" inherit>
          <MenuItemIcon>
            <User size="30" color="inherit" />
          </MenuItemIcon>
          <span>Login | Signup</span>
        </Link>
      </MenuItem>
    </MenuContainer>
  );
};
