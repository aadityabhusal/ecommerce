import { ShoppingCart, Heart, User } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { List, Link } from "./index";

const MenuContainer = styled(List)`
  align-items: center;
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.color.secondary};
  a {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.menuItem};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
    div {
      background: ${({ theme }) => theme.background.highlight};
    }
  }
`;

export const MenuItemIcon = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 100%;
`;

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <Link href="/user/cart" inherit>
          <MenuItemIcon>
            <ShoppingCart size="25" color="inherit" />
          </MenuItemIcon>
          <span>Cart</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/user/wishlist" inherit>
          <MenuItemIcon>
            <Heart size="25" color="inherit" />
          </MenuItemIcon>
          <span>Wishlist</span>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/login" inherit>
          <MenuItemIcon>
            <User size="25" color="inherit" />
          </MenuItemIcon>
          <span>Login | Signup</span>
        </Link>
      </MenuItem>
    </MenuContainer>
  );
};
