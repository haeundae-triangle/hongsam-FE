import ToolbarTopSide from "../components/Toolbars/ToolbarTopside";
import AdBanner from "../components/Banners/AdBanner";
import SearchBar from "../components/Toolbars/SearchBar";

//NOTE - 카드로 바로 랜더링 할지 or 카드 가지고 만드는 랭킹도 컴포넌트로 만들지 고민
import CardSmall from "../components/Cards/CardSmall";
import CardLarge from "../components/Cards/CardLarge"

const MainView = () => {

    return (
    <div className="main-view">
        
        <ToolbarTopSide />
        <AdBanner />
        <SearchBar />
        
    </div>
    );
}

export default MainView;