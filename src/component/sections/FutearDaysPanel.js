import { useSelector } from "react-redux";
import ImageSelector from "./ImageSelector";
import useFutureDate from "../hooks/UseDateAndTime";


function FutearDaysPanel({dayNumber,futearCast}){


  const forcastPeriodType = useSelector(state => state.times.forcastPeriodType);
  const presentTime = useSelector(state => state.times.presentTime);
  const temperType = useSelector(state => state.times.temperType);
  
  
  
  const avTempC = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_c;
  const avTempF = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_f;
  const Condition =  presentTime?.forecast?.forecastday[futearCast]?.day?.condition?.text;
  
  const { futureDate, futureDay } = useFutureDate(dayNumber); // Get the future date and day



  // console.log(Condition);

  
    return(
        <div className="day-box">
        <div className="tim-box">
          <div className="day">
            {futureDay}  
          </div>
          <span className="date">                
          {futureDate}
          </span>
        </div>
        <ImageSelector CN={"img"} condition={Condition}/>
        <div className="value-panel">
          <h3 className="value v-temp">
           {temperType === 'c'
            ? avTempC
            : avTempF}^
          </h3>
          <p className="title-panel">temperetor</p>
        </div>
      </div>
    );
}

export default FutearDaysPanel;

