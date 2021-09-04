import { Link, List, Select, SubSectionTitle } from "@components/ui";
import { Times } from "@styled-icons/fa-solid";
import styled from "styled-components";

const BarContainer = styled.div`
  margin-left: 25rem;
  padding: 0 1rem;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: space-between;
`;

const Items = styled(List)`
  li {
    padding: 0.4rem 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.secondary};
    background: transparent;
    margin-right: 1rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.3rem;
    }
  }
`;

const FilterList = styled.div`
  display: flex;
  align-items: center;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: ${({ theme }) => theme.font.title};
    margin-right: 1rem;
  }
`;

export const FilterBar = () => {
  return (
    <BarContainer>
      <FilterList>
        <Items>
          <li>
            <span>Men</span>
            <Times size="15" />
          </li>
          <li>
            <span>Adidas</span>
            <Times size="15" />
          </li>
          <li>
            <span>Chanel</span>
            <Times size="15" />
          </li>
          <li>
            <span>XL</span>
            <Times size="15" />
          </li>
        </Items>
        <span>
          <Link href="#" inherit>
            Clear All
          </Link>
        </span>
      </FilterList>
      <SortContainer>
        <div>Sort By</div>
        <Select font="1rem" width="10rem">
          <option>Price</option>
          <option>Date</option>
        </Select>
      </SortContainer>
    </BarContainer>
  );
};
