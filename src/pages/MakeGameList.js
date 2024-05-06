import { useEffect, useState } from 'react';
import ToolbarTopSide from "../components/ToolbarTopside";
import { SearchBar } from "../components/SearchBar";
import { InList } from "../components/MakeGameList/InList"
import { Games } from "../components/Main/Games"


const MakeGameList = () => {
    const [addList, setAddList] = useState([]);

    // TODO
    // 게임 클릭 시, addList에 추가, InList에 정보 넘겨주는 로직 추가할 것

    return (
    <div className="main-view">
        <div style={{height:'2vw'}}></div>
        <ToolbarTopSide />
        <InList />
        <div style={{height:'2vw'}}></div>
        <SearchBar />
        <Games />
    </div>
    );
}

export default MakeGameList;