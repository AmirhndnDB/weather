import "./CSS/App.css";
import "./CSS/NewsPage.css";
import "./CSS/Query.css";
import MainRoute from "./component/MainRoute";
import NewsPage from "./component/NewsPage";
import Link from "./component/Link";
import MainPage from "./component/MainPage";

function App() {
  return (
    <>
      <MainRoute path={"/"}>
        <MainPage />
      </MainRoute>
      <MainRoute path={"/news"}>
        <Link to={"/"}>back Home</Link>
        <NewsPage />
      </MainRoute>
    </>
  );
}

export default App;
