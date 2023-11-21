 import FutearHoursWeather from "./FutearsHoursWeather";
import WeathersData from "./WeathersData";
import { useDispatch,useSelector } from "react-redux";
import { fetchForcastData } from "../../store";
import { useEffect } from "react";
import ImageSelector from "./ImageSelector";
function HeaderWeather(){
    const dispatch = useDispatch();


    const {isLoading,error} = useSelector((state)=>{
        return state.times
    })
        const presentTime = useSelector(state => state.times.presentTime)
    useEffect(()=> {
      dispatch(fetchForcastData());
    },[dispatch]);

    if (isLoading){
        return <div>isLoading</div>
    }

    if(error){
        return <div> Error  fetching data . . . . .</div>
    }



   
    return (
        <section className="grid-items the-header-weather">
            <div className="date-time">
                {presentTime && presentTime.location && presentTime.location.localtime}
                
            </div>
            <div className="data-from-api">
                <div className="icon-box">
                  <ImageSelector CN={"weather-icon-image"} condition={"rainy"} />
                <p className="kind-of-weather">{presentTime && presentTime.current && presentTime.current.condition && presentTime.current.condition.text} 24-30</p>
                </div>
                <WeathersData title= {"temperetoure"} value={presentTime && presentTime.current && presentTime.current.temp_c} mark={"C^"} />
                <WeathersData title= {"humidityr"} value={presentTime && presentTime.current && presentTime.current.humidity} mark={"%"} />
                <WeathersData title= {"windSpid"} value={presentTime && presentTime.current && presentTime.current.wind_kph} mark={"km/h"}/>
            </div>

            <div className="pishbini-havaye-aty">
                <FutearHoursWeather  condition = {"Sunny"} />
                <FutearHoursWeather  condition = {"Overcast"} />
                <FutearHoursWeather  condition = {"clodSun"}/>
                <FutearHoursWeather  condition = {"moon"}/>
                <FutearHoursWeather  condition = {"moonClod"}/>
                <FutearHoursWeather  condition = {"clod-drizwl"}/>
                <FutearHoursWeather  condition = {"snowiy"}/>
                <FutearHoursWeather  condition = {"clody"}/>
            </div>
        </section>
    );
}
export default HeaderWeather;



