import MainForcastPanel from "./sections/MainForcastPanel" ;
import FutearWeather from "./sections/FutearWeather" ;
import UVIndex from "./sections/UVIndex" ;
import SunLocation from "./sections/SunLocation" ;
import Overview from "./sections/Overview" ;
import News from "./sections/News";
import useHourFromTimeString from "./hooks/useStringToHoursNumber";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchForcastData } from "../store";




function Main(){
    const LocationDatas = useSelector(state => state.times.presentTime);
    const LocalTime = LocationDatas?.location?.localtime; 
    const hour = useHourFromTimeString(LocalTime);
    const dispatch = useDispatch();
    const {isLoading,error} = useSelector((state)=>{
        return state.times
    })
    useEffect(()=> {
      dispatch(fetchForcastData());
    },[dispatch]);
    
    if (isLoading){
        return <div>isLoading.......</div>
    }
    
    if(error){
        return <div> Error  fetching data . . . . .</div>
    }


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