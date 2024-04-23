import { useState } from 'react'; // 추가
import styles from './AdBanner.module.css';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

export const Slide = ({slides}) => {
  return (
    slides.map((image, index) => (
    <div className={styles.slide_adbanner} key={index}> {/* key 추가 */}
      <img src={image} alt={`Banner${index}`} />
    </div>))
  );
};

// 수정 시작
export const AdBanner = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  return (
    <section style={{overflow:'hidden'}}>
      <div className={styles.container_adbanner}>
        <Slide slides={[slides[currentIndex]]}/> {/* 수정된 부분 */}
        <div className={styles.arrow}> {/* class -> className으로 수정 */}
            <button onClick={prevSlide}><CaretLeftFill /></button> {/* 수정된 부분 */}
            <button onClick={nextSlide}><CaretRightFill /></button> {/* 수정된 부분 */}
        </div>
      </div>
    </section>
  );
};
