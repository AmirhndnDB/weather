import Iconz from "./Iconz";
import { useSelector } from "react-redux";


function FutearHoursWeather ({hoursNumb}){
  const presentTime = useSelector(state => state.times.presentTime);
  const temperType = useSelector(state => state.times.temperType);
  const ConditionText = presentTime && presentTime.forecast  &&  presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].hour[hoursNumb] && presentTime.forecast.forecastday[0].hour[hoursNumb].condition.text;
  const hoursTime = presentTime && presentTime.forecast  &&  presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].hour[hoursNumb] && presentTime.forecast.forecastday[0].hour[hoursNumb].time;
  const tempC = presentTime && presentTime.forecast  &&  presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].hour[hoursNumb] && presentTime.forecast.forecastday[0].hour[hoursNumb].temp_c;
  const tempF = presentTime && presentTime.forecast  &&  presentTime.forecast.forecastday[0] && presentTime.forecast.forecastday[0].hour[hoursNumb] && presentTime.forecast.forecastday[0].hour[hoursNumb].temp_f ;



console.log(ConditionText)
console.log(hoursNumb)
console.log(hoursTime)
  return(
        <div className="pishbini-har-saat">
        <span>
        {hoursNumb}:00
        </span>
        <Iconz  condition={ConditionText}/>
        <span>
        {temperType === 'c'
        ? tempC 
        : tempF
        }
        {
        temperType === 'c'
        ? 'C^'
        : 'F^'
        } 
        </span>
      </div>
    );
}

export default FutearHoursWeather;