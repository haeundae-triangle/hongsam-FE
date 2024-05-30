import { useEffect, useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
import { AdBanner } from "../components/Banners/AdBanner";
import { SearchBar } from "../components/SearchBar";
import { GameListBanner } from '../components/Banners/GameListBanner';
import { GameLists } from '../components/Main/GameLists';
import { GameFilter } from '../components/Main/GameFilter';
import BottomNavigationBar from '../components/Main/BottomNavigationBar';
import styled from 'styled-components';

//NOTE - 샘플 이미지
import sampleImage1 from '../assets/sampleImage1.jpg';
import sampleImage2 from '../assets/sampleImage2.jpg';
import sampleImage3 from '../assets/sampleImage3.jpg';


const MainView = () => {
    const [bannerSlides, setBannerSlide] = useState([]);

    const getBannerSlide = () => {
        //TODO - API Call 구현 완료 후 배너 광고 가져오기
        //NOTE - 아니면 배너광고는 asset 파일에 놔두고 가져오는건 어떨지?
        const images = [
        sampleImage1, sampleImage2, sampleImage3,
        // 'public/Banner/sampleImage1',
        // 'public/Banner/sampleImage2',
        // 'public/Banner/sampleImage3',
        ]
        setBannerSlide(images);
    }

    useEffect(() => {
        getBannerSlide();
    }, [])

    return (
      <Container>
        <ToolbarTopSide />
        <AdBanner slides={bannerSlides}/>
        <SearchBar />
        <GameFilter />
        <GameListBanner />
        <GameLists />
        <BottomNavigationBar />
      </Container>
    );
}

export default MainView;

const Container = styled.div`
  background-color: #222222;

`