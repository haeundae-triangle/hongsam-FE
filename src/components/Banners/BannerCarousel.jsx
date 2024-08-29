import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

export const BannerCarousel = () => {
  const images = [1, 2]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <ArrowButton onClick={handlePrevClick} position="left">
        <CaretLeftFill />
      </ArrowButton>
      <ImageContainer>
        {images.map((image, index) => (
          <BannerImage
            key={index}
            // src={`assets/BannerCarousel/${image}.png`}
            src={`${process.env.PUBLIC_URL}/assets/BannerCarousel/${image}.png`}
            alt={index}
            style={{ display: currentIndex === index ? 'block' : 'none' }}
          />
        ))}
      </ImageContainer>
      <ArrowButton onClick={handleNextClick} position="right">
        <CaretRightFill />
      </ArrowButton>
    </Container>
  );
};

const Container = styled.div`
  // background-color: pink;
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ImageContainer = styled.div`
  // background-color: blue;
  width : 95%;
  height: 95%;
  border-radius: 20px;
  overflow: hidden;
`

const BannerImage = styled.img`
  width: 100%;
`


const ArrowButton = styled.button`
  background: none;
  color: white;
  font-size: 1.3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:first-child {
    left: 3%;
  }

  &:last-child {
    right: 3%;
  }
`;