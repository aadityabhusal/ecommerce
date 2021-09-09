import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "@styled-icons/fa-solid";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  ImageWithZoom,
} from "pure-react-carousel";

const GalleryContainer = styled.div`
  flex: 0 0 40%;
`;

const Provider = styled(CarouselProvider)`
  overflow-x: hidden;
  position: relative;
  margin: 1rem 0;
`;

const CarouselSlider = styled(Slider)`
  /* ul {
    display: flex;
    transition: 0.5s ease all;
  } */
`;

const CarouselImage = styled(ImageWithZoom)`
  img {
    width: 100%;
    height: 250px;
  }
`;

const LeftButton = styled(ButtonBack)`
  position: absolute;
  top: 50%;
  left: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RightButton = styled(ButtonNext)`
  position: absolute;
  top: 50%;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProductGallary = () => {
  return (
    <GalleryContainer>
      <Provider
        totalSlides={3}
        naturalSlideWidth={0}
        naturalSlideHeight={100}
        interval={3000}
        isPlaying
        infinite
      >
        <CarouselSlider>
          <Slide index={0}>
            <CarouselImage
              src="/products/product1.jpg"
              srcZoomed="/products/product1.jpg"
            />
          </Slide>
          <Slide index={1}>
            <CarouselImage src="/products/product2.png" />
          </Slide>
          <Slide index={2}>
            <CarouselImage src="/products/product3.jpg" />
          </Slide>
        </CarouselSlider>
        <LeftButton>
          <ChevronLeft size="20" />
        </LeftButton>
        <RightButton>
          <ChevronRight size="20" />
        </RightButton>
      </Provider>
    </GalleryContainer>
  );
};
