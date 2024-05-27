import MainView from "./pages/MainView.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MakeGameList from "./pages/MakeGameList.js"
import GameListDetail from "./pages/GameListDetail.js"
import GameDetail from "./pages/GameDetail.js"
import styled from 'styled-components'

// TODO - 페이지별로 라우터 만들기 
function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="MakeGameList" element={<MakeGameList />}></Route>

          {/* TODO : 개별 게임리스트, 개별 게임으로 이동하도록 수정 */}
          <Route path="GameListDetail" element={<GameListDetail />}></Route>
          <Route path="GameDetail" element={<GameDetail />}></Route>
        </Routes>
      </Router>
    </Container>
   
  )
}

export default App;

const Container = styled.div`
  background-color: #222222;
`