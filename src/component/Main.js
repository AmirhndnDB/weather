import HeaderWeather from "./sections/HeaderWeather" ;
import FutearWeather from "./sections/FutearWeather" ;
import UVIndex from "./sections/UVIndex" ;
import SunLocation from "./sections/SunLocation" ;
import Overview from "./sections/Overview" ;
import News from "./sections/News";


function Main(){
    return (
        <main className="all-contents">
            <HeaderWeather/>
            <FutearWeather/>
            <UVIndex/>
            <SunLocation/>
            <Overview/>
            <News/>
        </main>
    );
}


export default  Main;