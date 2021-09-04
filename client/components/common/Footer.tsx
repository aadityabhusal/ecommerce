import styled from "styled-components";
import { Link, List } from "@components/ui";
import Image from "next/image";
import { Facebook, Instagram, Whatsapp } from "@styled-icons/fa-brands";
import { Envelope } from "@styled-icons/fa-solid";
import { LinkTag } from "@components/ui/Link";

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.background.footer};
  color: ${({ theme }) => theme.color.onDark};
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;

  h4 {
    font-size: ${({ theme }) => theme.font.subSectionTitle};
    margin-bottom: 1.5rem;
  }
`;

const LogoSection = styled.div`
  flex: 0 0 300px;
  text-align: center;
  margin-right: 2rem;

  & > div {
    margin-top: 2rem;
    line-height: 1.5;
  }
`;

const FooterMenu = styled.div`
  margin: 0 2rem;
`;

const FooterMenuList = styled(List)`
  flex-direction: column;

  li {
    font-size: ${({ theme }) => theme.font.menuItem};
    margin-bottom: 0.5rem;
  }
`;

const SocialSection = styled.div`
  flex: 0 0 250px;
  margin-left: 2rem;

  & > div {
    margin-bottom: 2rem;
  }

  a {
    margin-right: 1rem;
  }
`;

export function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <LogoSection>
          <Image src="/logo.png" height={160} width={150} alt="Gharagan Logo" />
          <div>
            GharAgan Is An Online Store Located In Lalitpur, Nepal. We Sell Home
            And Fashion Related Products Across Nepal Along With Home Delivery
            Service.
          </div>
        </LogoSection>
        <FooterMenu>
          <h4>Categories</h4>
          <FooterMenuList>
            <li>
              <Link href="#" inherit>
                Men
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Women
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Electronics
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Stationary
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Musical Instruments
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Health & Beauty
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Gadgets
              </Link>
            </li>
          </FooterMenuList>
        </FooterMenu>
        <FooterMenu>
          <h4>Account & Shipping</h4>
          <FooterMenuList>
            <li>
              <Link href="/user/" inherit>
                My Account
              </Link>
            </li>
            <li>
              <Link href="/user/orders" inherit>
                Delivery Info
              </Link>
            </li>
            <li>
              <Link href="/track-orders" inherit>
                Order Tracking
              </Link>
            </li>
            <li>
              <Link href="/user/" inherit>
                Refunds and Replacement
              </Link>
            </li>
            <li>
              <Link href="#" inherit>
                Fees
              </Link>
            </li>
          </FooterMenuList>
        </FooterMenu>
        <FooterMenu>
          <h4>About Us</h4>
          <FooterMenuList>
            <li>
              <Link href="/about" inherit>
                About Company
              </Link>
            </li>
            <li>
              <Link href="/portfolio" inherit>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/team" inherit>
                Team
              </Link>
            </li>
            <li>
              <Link href="/careers" inherit>
                Careers
              </Link>
            </li>
            <li>
              <Link href="news" inherit>
                News
              </Link>
            </li>
          </FooterMenuList>
        </FooterMenu>
        <SocialSection>
          <h4>Follow Us</h4>
          <div>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Facebook size="35" color="inherit" />
            </LinkTag>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Instagram size="35" color="inherit" />
            </LinkTag>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Whatsapp size="35" color="inherit" />
            </LinkTag>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Envelope size="35" color="inherit" />
            </LinkTag>
          </div>
          <h4>Payments Supported</h4>
          <div>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Image
                src="/esewa_logo.png"
                width={33}
                height={33}
                alt="Esewa Logo"
              />
            </LinkTag>
            <LinkTag href="https://www.github.com" target="_blank" inherit>
              <Image
                src="/paypal_logo.png"
                width={26}
                height={33}
                alt="Paypal Logo"
              />
            </LinkTag>
          </div>
        </SocialSection>
      </FooterContent>
    </FooterSection>
  );
}
