import "./CSS/App.css";
import MainRoute from "./component/MainRoute";
import NewsPage from "./component/NewsPage";
import Link from "./component/Link";
import MainPage from "./MainPage";
function App(){
    return (
    <>
        <MainRoute path={"/"}>
            <MainPage/>
        </MainRoute>
        <Link to={"/"}>back Hom</Link>
        <MainRoute path={"/news"}>
            <NewsPage/>
        </MainRoute>
    </>
        
    );
}

export default  App;