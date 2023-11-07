import { useDispatch,useSelector } from "react-redux";
import { changeFutearDate,changeFutearDay,featchTimeZoneThunk } from "../../store";
import { useEffect } from "react";


function FutearDaysPanel({dayNumber}){


  const Day = useSelector((state)=> state.times.futearDay[dayNumber])
  const FutearDates = useSelector((state)=> state.times.futearDate)
  


  const  date = new Date
  const FDate = date.getDate() + dayNumber +1;
  
    return(
        <div className="day-box">
        <div className="tim-box">
          <div className="day">{Day}</div>
          <span className="date">                
            {FDate},{date.getMonth()},
            {date.getFullYear()},{date.getHours()}
            :{date.getMinutes()}
          </span>
        </div>
        <img
          src=""
          className="img"
          alt=""
        />
        <div className="value-panel">
          <h3 className="value v-temp">30^</h3>
          <p className="title-panel">temperetor</p>
        </div>
      </div>
    );
}

export default FutearDaysPanel;