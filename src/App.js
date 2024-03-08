import "./CSS/App.css";
import "./CSS/NewsPage.css";
import "./CSS/Query.css";
import MainRoute from "./component/MainRoute";
import NewsPage from "./component/NewsPage";
import Link from "./component/Link";
import MainPage from "./component/MainPage";
// import AllSkeleton from "./component/sections/AllSkeleton";
// import Header from "./component/Header";
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