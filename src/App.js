import MainView from "./pages/MainView.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameBox from "./pages/GameBox.js"
import GameListDetail from "./pages/GameListDetail.js"
import GameDetail from "./pages/GameDetail.js"
import MakeLink from "./pages/MakeLink.js"
import ShareLink from "./pages/ShareLink.js"
// import Search from "./pages/Search.js"
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="GameBox" element={<GameBox />}></Route>
          {/* <Route path="Search" element={<Search />}></Route> */}

          {/* TODO : 개별 게임리스트, 개별 게임으로 이동하도록 수정 */}
          <Route path="GameListDetail" element={<GameListDetail />}></Route>
          <Route path="GameDetail" element={<GameDetail />}></Route>

          {/* TODO : 리스트를 담아 이동하도록 수정 */}
          <Route path="MakeLink" element={<MakeLink />}></Route>
          <Route path="ShareLink" element={<ShareLink />}></Route>
        </Routes>
      </Router>
    </Container>
   
  )
}

export default App;

const Container = styled.div`
  background-color: #222222;
`