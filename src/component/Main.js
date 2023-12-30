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
import Skeleton from '@mui/material/Skeleton';
import Footer from "./Footer";


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

        return (
            <main className="all-contents">
            <Skeleton   
            sx={{ bgcolor: '#359bff' }}
            // height={100}
            className="grid-items the-header-weather"/>
            <Skeleton  
            sx={{ bgcolor: '#359bff' }}
            // height={100}
             className="grid-items futer-weather"/>
            <Skeleton   
            sx={{ bgcolor: '#359bff' }}
            // height={100}
            className="grid-items uv-index"/>
            <Skeleton  
            sx={{ bgcolor: '#359bff' }}
            // height={100}
             className="grid-items sun-location"/>
            <Skeleton  
            sx={{ bgcolor: '#359bff' }}
            // height={100}
             className="grid-items overview"/>
            <Skeleton 
            sx={{ bgcolor: '#359bff' }}
            // height={100}
             className="grid-items weather-news"/>
        </main>
      )
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
            <Footer className="test-component grid-items"/>

        </main>
    );
}


export default  Main;