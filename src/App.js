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
        <MainRoute path={"/news"}>
        <Link to={"/"}>back Hom</Link>
            <NewsPage/>
        </MainRoute>
    </>
        
    );
}

export default  App;