import { useEffect, useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
import { BannerCarousel } from '../components/Banners/BannerCarousel';
import { SearchBar } from "../components/SearchBar";
import { GameListBanner } from '../components/Banners/GameListBanner';
import { GameLists } from '../components/Main/GameLists';
import { GameFilter } from '../components/Main/GameFilter';
import BottomNavigationBar from '../components/BottomNavigationBar';
import styled from 'styled-components';
import useFetchServiceGameBoxes from '../hooks/useFetchServiceGameBoxes';

const MainView = () => {
  const [allGames, setAllGames] = useState([]);
  const { serviceBoxes, serviceBoxesError, serviceBoxesIsLoading } = useFetchServiceGameBoxes();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/AllGames.json`)
      .then(response => response.json())
      .then(json => {
        setAllGames(json);
        console.log(json);
      });
    }, []);

  return (
    <Container>
      <ToolbarTopSide />
      <BannerCarousel />
      <SearchBar allGames={allGames} />
      <GameFilter allGames={allGames} />
      <GameListBanner />
      <GameLists info={serviceBoxes}/>
      {/* <BottomNavigationBar /> */}
    </Container>
  );
}

export default MainView;

const Container = styled.div`
  background-color: #222222;
  width: 100%;
  height: auto;
  overflow: hidden;
`