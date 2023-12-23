import { useSelector } from "react-redux";
import ImageSelector from "./ImageSelector";


function FutearDaysPanel({dayNumber,futearCast}){


  const forcastPeriodType = useSelector(state => state.times.forcastPeriodType);
  const presentTime = useSelector(state => state.times.presentTime);
  const temperType = useSelector(state => state.times.temperType);
  const Day = useSelector((state)=> state.times.futearDay[dayNumber]);
  const week = useSelector((state)=> state.times.futearWeek[dayNumber]);



  const avTempC = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_c;
  const avTempF = presentTime?.forecast?.forecastday[futearCast]?.day?.avgtemp_f;
  const Condition =  presentTime?.forecast?.forecastday[futearCast]?.day?.condition?.text;

  console.log(Condition);


  const  date = new Date
  const FDate = date.getDate() + dayNumber +1;
  
    return(
        <div className="day-box">
        <div className="tim-box">
          <div className="day">{
            forcastPeriodType === 'daly'
            ? Day
            : week
          }</div>
          <span className="date">                
            {date.getFullYear()}-
            {date.getMonth()}-
            {FDate}
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