import { ProductCard } from "@components/product";
import Image from "next/image";
import { SectionTitle, Section, SectionList } from "@components/ui";
import styled from "styled-components";
import React from "react";
import { ChevronCircleLeft, ChevronCircleRight } from "@styled-icons/fa-solid";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

const SectionBanner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 23rem;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.background.highlight};
  z-index: 10;

  h4 {
    margin: 0;
    margin-bottom: auto;
    font-size: ${({ theme }) => theme.font.base};
    color: ${({ theme }) => theme.color.brand};
  }
`;

const BannerTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SectionBannerImage = styled.div`
  text-align: center;
`;

const Provider = styled(CarouselProvider)`
  overflow-x: hidden;
  display: flex;
  margin: 1rem 0;
`;

const CarouselSlider = styled(Slider)`
  ul {
    display: flex;
    list-style: none;
    transition: 0.5s ease all;
  }
`;

const LeftButton = styled(ButtonBack)`
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-top: 0.25rem;
`;

const RightButton = styled(ButtonNext)`
  border: none;
  cursor: pointer;
  margin-top: 0.25rem;
`;

interface IHomeSection {
  title: string;
}

export function HomeSliderSection({ title }: IHomeSection) {
  return (
    <Section>
      <Provider
        totalSlides={2}
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        infinite
      >
        <SectionBanner>
          <BannerTopSection>
            <SectionTitle>{title}</SectionTitle>
            <div>
              <LeftButton>
                <ChevronCircleLeft size="30" color="#bdc3c7" />
              </LeftButton>
              <RightButton>
                <ChevronCircleRight size="30" color="#bdc3c7" />
              </RightButton>
            </div>
          </BannerTopSection>
          <h4>Our Featured Products</h4>
          <SectionBannerImage>
            <Image
              src="/section-banner.jpg"
              alt="Product Banner"
              height={620}
              width={360}
            />
          </SectionBannerImage>
        </SectionBanner>
        <CarouselSlider>
          <Slide index={0}>
            <SectionList>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </SectionList>
          </Slide>
          <Slide index={1}>
            <SectionList>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </SectionList>
          </Slide>
        </CarouselSlider>
      </Provider>
    </Section>
  );
}

/* 

 */
