import MainView from "./pages/MainView.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css"
import MakeGameList from "./pages/MakeGameList.js"

// TODO - 페이지별로 라우터 만들기 
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="MakeGameList" element={<MakeGameList />}></Route>
        </Routes>
      </Router>
    </div>
   
  )
}

export default App;