import {
  Link,
  List,
  SectionTitle,
  SubSectionTitle,
  Input,
  CheckBox,
} from "@components/ui";
import { ChevronCircleDown, ChevronCircleUp } from "@styled-icons/fa-solid";
import styled from "styled-components";

const PanelContainer = styled.div`
  flex: 0 0 21rem;
  margin-right: 2rem;
  transform: translateY(-4rem);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: 0px 6px 10px 0px ${({ theme }) => theme.color.shadow};
`;

const PanelSection = styled.div`
  margin-bottom: 1.5rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

const PanelList = styled(List)`
  flex-direction: column;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;

  li {
    display: flex;
    justify-content: space-between;
  }
`;

const PanelItem = styled.li`
  margin-bottom: 1rem;
`;

const PanelSubItem = styled.li`
  font-size: ${({ theme }) => theme.font.menuItem};
  color: ${({ theme }) => theme.color.secondary};
  margin-right: 1rem;
  margin-bottom: 0.8rem;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const PriceInput = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 0.5rem 0;
  }
  div {
    flex: 0 0 48%;
  }
`;

export const FilterPanel = () => {
  return (
    <PanelContainer>
      <PanelSection>
        <SectionTitle>Categories</SectionTitle>
        <PanelList>
          <PanelItem>
            <SubSectionTitle>
              <Link href="#" inherit>
                Men
              </Link>
            </SubSectionTitle>
            <ChevronCircleUp size="22" color="#ff8c8c" />
          </PanelItem>
          <PanelList>
            <PanelSubItem>
              <Link href="#" inherit>
                Shoes
              </Link>
              <span>20</span>
            </PanelSubItem>
            <PanelSubItem>
              <Link href="#" inherit>
                T-shirts
              </Link>
              <span>20</span>
            </PanelSubItem>
            <PanelSubItem>
              <Link href="#" inherit>
                Jackets
              </Link>
              <span>20</span>
            </PanelSubItem>
            <PanelSubItem>
              <Link href="#" inherit>
                Watches
              </Link>
              <span>20</span>
            </PanelSubItem>
            <PanelSubItem>
              <Link href="#" inherit>
                Jeans
              </Link>
              <span>20</span>
            </PanelSubItem>
          </PanelList>
          <PanelItem>
            <SubSectionTitle>
              <Link href="#" inherit>
                Women
              </Link>
            </SubSectionTitle>
            <ChevronCircleDown size="22" color="#ff8c8c" />
          </PanelItem>
          <PanelItem>
            <SubSectionTitle>
              <Link href="#" inherit>
                Electronics
              </Link>
            </SubSectionTitle>
            <ChevronCircleDown size="22" color="#ff8c8c" />
          </PanelItem>
          <PanelItem>
            <SubSectionTitle>
              <Link href="#" inherit>
                Stationary
              </Link>
            </SubSectionTitle>
            <ChevronCircleDown size="22" color="#ff8c8c" />
          </PanelItem>
        </PanelList>
      </PanelSection>
      <PanelSection>
        <SectionTitle>Price</SectionTitle>
        <PriceInput>
          <div>
            <SubSectionTitle>Min</SubSectionTitle>
            <Input type="number" placeholder="Min Value" font="1.2rem" />
          </div>
          <div>
            <SubSectionTitle>Max</SubSectionTitle>
            <Input type="number" placeholder="Max Value" font="1.2rem" />
          </div>
        </PriceInput>
      </PanelSection>
      <PanelSection>
        <SectionTitle>Brands</SectionTitle>
        <PanelList>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />
              Adidas
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />
              Hermes
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />
              Prada
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />
              Chanel
            </label>
            <span>20</span>
          </PanelSubItem>
        </PanelList>
      </PanelSection>
      <PanelSection>
        <SectionTitle>Sizes</SectionTitle>
        <PanelList>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />
              XS
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />S
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />M
            </label>
            <span>20</span>
          </PanelSubItem>
          <PanelSubItem>
            <label>
              <CheckBox type="checkbox" />L
            </label>
            <span>20</span>
          </PanelSubItem>
        </PanelList>
      </PanelSection>
    </PanelContainer>
  );
};
