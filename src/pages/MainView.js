import { useEffect, useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
import { BannerCarousel } from '../components/Banners/BannerCarousel';
// import { AdBanner } from "../components/Banners/AdBanner";
import { SearchBar } from "../components/SearchBar";
import { GameListBanner } from '../components/Banners/GameListBanner';
import { GameLists } from '../components/Main/GameLists';
import { GameFilter } from '../components/Main/GameFilter';
import BottomNavigationBar from '../components/BottomNavigationBar';
import styled from 'styled-components';
import useFetchServiceGameBoxes from '../hooks/useFetchServiceGameBoxes';

//NOTE - 샘플 이미지
import sampleImage1 from '../assets/sampleImage1.jpg';
import sampleImage2 from '../assets/sampleImage2.jpg';
import sampleImage3 from '../assets/sampleImage3.jpg';

const MainView = () => {
  const [allGames, setAllGames] = useState([]);
  const [bannerSlides, setBannerSlide] = useState([]);
  const { serviceBoxes, serviceBoxesError, serviceBoxesIsLoading } = useFetchServiceGameBoxes();

  useEffect(() => {
    fetch('AllGames.json')
      .then(response => response.json())
      .then(json => {
        setAllGames(json);
        console.log(json);
      });
    }, []);

  const getBannerSlide = () => {
      //TODO - API Call 구현 완료 후 배너 광고 가져오기
      //NOTE - 아니면 배너광고는 asset 파일에 놔두고 가져오는건 어떨지?
      const images = [
      sampleImage1, sampleImage2, sampleImage3,
      ]
      setBannerSlide(images);
  }

  useEffect(() => {
      getBannerSlide();
  }, [])

  return (
    <Container>
      <ToolbarTopSide />
      <BannerCarousel />
      {/* <AdBanner slides={bannerSlides} /> */}
      <SearchBar allGames={allGames} />
      <GameFilter allGames={allGames} />
      <GameListBanner />
      <GameLists info={serviceBoxes}/>
      <BottomNavigationBar />
    </Container>
  );
}

export default MainView;

const Container = styled.div`
  background-color: #222222;

`