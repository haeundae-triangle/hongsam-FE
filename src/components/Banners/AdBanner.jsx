import { useState } from 'react'; // 추가
import styled from 'styled-components'
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

export const Slide = ({slides}) => {
  return (
    slides.map((image, index) => (
      <SlideAdBanner key={index}>
        <SlideImage src={image} alt={`Banner${index}`} />
      </SlideAdBanner>
    ))
  );
};

export const AdBanner = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  return (
    <AdBannerSection>
      <AdBannerContainer>
        <SlideContainer>
          <Slide slides={[slides[currentIndex]]}/>
        </SlideContainer>
        <ArrowContainer>
          <ArrowButton onClick={prevSlide}><CaretLeftFill /></ArrowButton>
          <ArrowButton onClick={nextSlide}><CaretRightFill /></ArrowButton>
        </ArrowContainer>
      </AdBannerContainer>
    </AdBannerSection>
  );
};

const SlideContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 120px;
`;

const SlideAdBanner = styled.div`
  transition: transform 0.5s;
  width: 90vw;
  height: 120px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 15px;
`;

const AdBannerSection = styled.section`
  overflow: hidden;
`;

const AdBannerContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 120px;
  margin: 0 auto;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 86vw;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
`;

// TODO : 배경색에 따라 화살표 다른 색상으로 만들기
const ArrowButton = styled.button`
  cursor: pointer;
  color: #1E1E1E;
  background-color: transparent;
  font-size: 15px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;