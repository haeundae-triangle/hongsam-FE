import { Provider } from 'react-redux';
import store from './redux/store';

import MainView from "./pages/MainView.js";
import { BrowserRouter as BrowserRouter, Router, Routes, Route } from "react-router-dom";
import GameBox from "./pages/GameBox.js";
import GameListDetail from "./pages/GameListDetail.js";
import GameDetail from "./pages/GameDetail.js";
import MakeLink from "./pages/MakeLink.js";
import ShareLink from "./pages/ShareLink.js";
// import Search from "./pages/Search.js";
import styled from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Router basename="/hongsam-FE"></Router> */}
          <Routes>
            <Route path="/hongsam-FE" element={<MainView />}></Route>
            <Route path="/GameBox" element={<GameBox />}></Route>
            {/* <Route path="Search" element={<Search />}></Route> */}

            <Route path="/GameListDetail/:id" element={<GameListDetail />}></Route>
            <Route path="/GameDetail/:id" element={<GameDetail />}></Route>

            <Route path="/MakeLink" element={<MakeLink />}></Route>
            <Route path="/ShareLink" element={<ShareLink />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App;

const Container = styled.div`
  background-color: #222222;
`