import styled from "styled-components";
import { Link, List } from "@components/ui";
import { FacebookSquare, Instagram } from "@styled-icons/fa-brands";
import { LinkTag } from "@components/ui/Link";

const TopBarSection = styled.header`
  background: ${({ theme }) => theme.background.highlight};
`;

const TopBarContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarList = styled(List)`
  align-items: center;

  li {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialMediaIcons = styled.div`
  color: ${({ theme }) => theme.colors.darkHighlight};
`;

export function TopBar() {
  return (
    <TopBarSection>
      <TopBarContent>
        <TopBarList>
          <li>
            <Link inherit href="/user/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link inherit href="/user/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link inherit href="/track-order">
              Track Order
            </Link>
          </li>
          <li>
            <Link inherit href="/user/wishlist">
              Wishlist
            </Link>
          </li>
          <li>gharagan7@gmail.com</li>
          <li>977-9845476479</li>
        </TopBarList>
        <TopBarList>
          <li>
            <Link inherit href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link inherit href="/signup">
              Register
            </Link>
          </li>
          <li>Follow Us:</li>
          <li>
            <SocialMediaIcons>
              <LinkTag target="_blank" href="https://www.github.com" inherit>
                <FacebookSquare size="28" color="inherit" />
              </LinkTag>
              <LinkTag target="_blank" href="https://www.github.com" inherit>
                <Instagram size="28" color="inherit" />
              </LinkTag>
            </SocialMediaIcons>
          </li>
        </TopBarList>
      </TopBarContent>
    </TopBarSection>
  );
}
