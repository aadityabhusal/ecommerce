import Image from "next/image";
import styled, { css } from "styled-components";
import StarRatings from "react-star-ratings";
import { FC, useState } from "react";
import { Link } from "@components/ui";

interface IProductCard {
  small?: boolean;
}

const CardContainer = styled.div<IProductCard>`
  flex: 0 0 ${({ small }) => (small ? "150px" : "320px")};
  text-align: center;
  padding: 0.8rem;
  margin: 1rem;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0px 6px 10px 0px ${({ theme }) => theme.color.shadow};
  }
`;
const Favourite = styled.div``;
const ImageContainer = styled.div``;

const ProductInfo = styled.div`
  padding: 1rem 0;
  & > * {
    margin-top: 1rem;
  }
`;
const Title = styled.div<IProductCard>`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.title};
  font-weight: bold;
  text-align: left;
  ${({ small }) =>
    small &&
    css`
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;
const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Category = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.base};
`;

const SalePrice = styled.div<IProductCard>`
  font-size: ${({ theme }) => theme.font.subSectionTitle};
  color: ${({ theme }) => theme.color.price};

  ${({ small }) => small && "margin-bottom: 0.5rem;"};
`;

const Price = styled.div<IProductCard>`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.base};
  text-decoration: line-through;
  margin-left: 0.5rem;
  margin-right: auto;

  ${({ small }) => small && "margin-left: 0;"};
`;

const SalePercentage = styled.div`
  background-color: ${({ theme }) => theme.color.price}20;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.color.price};
  font-size: ${({ theme }) => theme.font.base};
  margin-left: auto;
`;

export const ProductCard: FC<IProductCard> = ({ small }) => {
  const [rating, setRating] = useState(0);
  return (
    <CardContainer small={small}>
      <Favourite />
      <ImageContainer>
        <Image
          src="/products/product1.jpg"
          alt="Product"
          width={320}
          height={320}
        />
      </ImageContainer>
      <ProductInfo>
        {!small && (
          <CardRow>
            <Category>
              <Link href="/category/sunglasses" inherit>
                Sunglasses
              </Link>
            </Category>
            <StarRatings
              rating={rating}
              starRatedColor="#f9c961"
              changeRating={setRating}
              numberOfStars={5}
              name="rating"
              starDimension="22px"
              starSpacing="0px"
            />
          </CardRow>
        )}
        <Title small={small}>
          <Link href="/product/1" inherit>
            Dior Ladies Sunglasses designed for Women
          </Link>
        </Title>
        <CardRow>
          <SalePrice small={small}>Rs. 4,999.00</SalePrice>
          <Price small={small}>Rs 5,999.00</Price>
          <SalePercentage>-20%</SalePercentage>
        </CardRow>
      </ProductInfo>
    </CardContainer>
  );
};
