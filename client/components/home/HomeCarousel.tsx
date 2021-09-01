// import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import { ChevronLeft, ChevronRight } from "@styled-icons/fa-solid";
import styled from "styled-components";

const Provider = styled(CarouselProvider)`
  overflow-x: hidden;
  position: relative;
  margin-bottom: 1rem;
`;

const CarouselSlider = styled(Slider)`
  ul {
    display: flex;
    transition: 0.5s ease all;
  }
`;

const CarouselImage = styled(Image)`
  width: 100%;
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

export function HomeCarousel() {
  return (
    <Provider
      totalSlides={3}
      naturalSlideWidth={0}
      naturalSlideHeight={0}
      interval={3000}
      isPlaying
      infinite
    >
      <CarouselSlider>
        <Slide index={0}>
          <CarouselImage
            hasMasterSpinner
            src="/slider/carous1.jpg"
            alt="First Carousel Image"
          />
        </Slide>
        <Slide index={1}>
          <CarouselImage
            hasMasterSpinner
            src="/slider/carous2.jpg"
            alt="Second Carousel Image"
          />
        </Slide>
        <Slide index={2}>
          <CarouselImage
            hasMasterSpinner
            src="/slider/carous3.jpg"
            alt="Third Carousel Image"
          />
        </Slide>
      </CarouselSlider>
      <LeftButton>
        <ChevronLeft size="50" />
      </LeftButton>
      <RightButton>
        <ChevronRight size="50" />
      </RightButton>
    </Provider>
  );
}
