import styled from "styled-components";
import { Link, List } from "@components/ui";
import { FacebookSquare, Instagram } from "@styled-icons/fa-brands";
import { LinkTag } from "@components/ui/Link";
import { Envelope, Phone } from "@styled-icons/fa-solid";

const TopBarSection = styled.header`
  background: ${({ theme }) => theme.background.highlight};
`;

const TopBarContent = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBarList = styled(List)`
  align-items: center;
  li {
    font-size: ${({ theme }) => theme.font.menuSubItem};
    margin-right: 0.5rem;
    padding: 0px 0.5rem;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const SocialMediaIcons = styled.div`
  color: ${({ theme }) => theme.color.primary};
  a {
    margin-right: 0.5rem;
  }
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
          <li>
            <Envelope size="15" color="inherit" /> gharagan7@gmail.com
          </li>
          <li>
            <Phone size="15" color="inherit" /> 977-9845476479
          </li>
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
