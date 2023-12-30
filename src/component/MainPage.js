import Header from "./Header";
import Main from "./Main";
import TestComponent from "./TestComponent";
import "../CSS/Header.css";
import "../CSS/MainForcastPanel.css";
import "../CSS/FutearWeather.css";
import "../CSS/Overvew.css";
import "../CSS/SunLocation.css";
import "../CSS/UV.css";
import "../CSS/weatherNews.css";

function MainPage(){
    return(
    <>
    <Header/>
    <Main/>
    <TestComponent/>
    </>
    )
}

export default  MainPage