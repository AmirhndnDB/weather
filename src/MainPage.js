import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import TestComponent from "./component/TestComponent";
import "./CSS/Header.css";
import "./CSS/MainForcastPanel.css";
import "./CSS/FutearWeather.css";
import "./CSS/Overvew.css";
import "./CSS/SunLocation.css";
import "./CSS/UV.css";
import "./CSS/weatherNews.css";

function MainPage(){
    return(<>
    <Header/>
    <Main/>
    <TestComponent/>
    <Footer/>
    </>
    )
}

export default  MainPage