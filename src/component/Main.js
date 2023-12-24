import MainForcastPanel from "./sections/MainForcastPanel" ;
import FutearWeather from "./sections/FutearWeather" ;
import UVIndex from "./sections/UVIndex" ;
import SunLocation from "./sections/SunLocation" ;
import Overview from "./sections/Overview" ;
import News from "./sections/News";
import { useSelector } from "react-redux";
import useHourFromTimeString from "./hooks/useStringToHoursNumber";


function Main(){
    const LocationDatas = useSelector(state => state.times.presentTime);
    const LocalTime = LocationDatas?.location?.localtime; 
    const hour = useHourFromTimeString(LocalTime);


    return (
        <main className="all-contents">
            <MainForcastPanel hour={hour}/>
            <FutearWeather/>
            <UVIndex/>
            <SunLocation/>
            <Overview/>
            <News/>
        </main>
    );
}


export default  Main;