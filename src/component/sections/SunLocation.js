import ImageSelector from "./ImageSelector";
import { useSelector } from "react-redux";
import useTimeToMinutes from "../hooks/UsePersentHours";

function SunLocation(){
const presentTime = useSelector(state => state.times.presentTime);
const sunrise = presentTime && presentTime.forecast && presentTime.forecast.forecastday && presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].day && presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].astro.sunrise;
const sunset = presentTime && presentTime.forecast && presentTime.forecast.forecastday && presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].day && presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].astro.sunset;


const nowTime = '4:49 PM' ;
const sunRTMin =useTimeToMinutes(sunrise) ;
const sunRTMax =useTimeToMinutes('04:51 PM') ;
const NOWTime =useTimeToMinutes(nowTime) ;


const TEyShodeSun = (NOWTime - sunRTMin)
const dayTimeMinets = (sunRTMax - sunRTMin )
const PersentTeyShode = ((TEyShodeSun/dayTimeMinets) - 0.42);
const a = 0.21 ;
const b = 0.49 ;
const beta = 0.45 ;
const Y = (a* ((b)**2 - (PersentTeyShode)**2)**0.5)/a
console.log(dayTimeMinets,TEyShodeSun, PersentTeyShode,Y)

    return (
        <section className="grid-items sun-location">
          <div class="sun-box">
          <div>sunris</div>
          <div className="axis-sun">
           <ImageSelector CN={"sun"} condition={"Sunny"}/>
            <div className="erth-border-sun"></div>
          </div>
          <div>sunset</div>
        </div>
        <div className="sun-tims">
          <span className="sun-tims-items sun-tims-item-left">{sunrise}</span>
          <span className="sun-tims-items sun-tims-item-right" >{sunset}</span>
        </div>
        </section>
    );
}
export default SunLocation;



      

