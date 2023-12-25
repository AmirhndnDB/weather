import { useSelector } from "react-redux";
import ImageSelector from "./ImageSelector";
import useFutureDate from "../hooks/UseDateAndTime";
import useFutureDatePelass from "../hooks/UseDateAndTimePelass";



function FutearWeekPanel({dayNumberFrom,futearCast,dayNumberTill}){


  const forcastPeriodType = useSelector(state => state.times.forcastPeriodType);
  const presentTime = useSelector(state => state.times.presentTime);
  const temperType = useSelector(state => state.times.temperType);
  
  
  
  const avTempC = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_c;
  const avTempF = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_f;
  const Condition =  presentTime?.forecast?.forecastday[futearCast]?.day?.condition?.text;
  const randomnumber = Math.random()
  
  
  const { futureDate} = useFutureDate(dayNumberFrom); // Get the future date and day
  const {futureDatePelass} = useFutureDatePelass(dayNumberTill)




  console.log(Condition);

  
    return(
        <div className="day-box">
        <div className="tim-box">
          <div className="day">
            {futureDate}
          </div>
          <span className="date">                
          {futureDatePelass}
          </span>
        </div>
        <ImageSelector CN={"img"} condition={Condition}/>
        <div className="value-panel">
          <h3 className="value v-temp">
           {temperType === 'c'
            ? parseInt(avTempC *randomnumber)
            : parseInt(avTempF *randomnumber)
            }^
          </h3>
          <p className="title-panel">temperetor</p>
        </div>
      </div>
    );
}

export default FutearWeekPanel;