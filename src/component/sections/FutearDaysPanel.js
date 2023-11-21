import { useSelector } from "react-redux";
import ImageSelector from "./ImageSelector";



function FutearDaysPanel({dayNumber,imgeUrl}){


  const Day = useSelector((state)=> state.times.futearDay[dayNumber])
  const FutearDates = useSelector((state)=> state.times.futearDate)
  


  const  date = new Date
  const FDate = date.getDate() + dayNumber +1;
  
    return(
        <div className="day-box">
        <div className="tim-box">
          <div className="day">{Day}</div>
          <span className="date">                
            {date.getFullYear()}-
            {date.getMonth()}-
            {FDate}
          </span>
        </div>
        <ImageSelector CN={"img"} condition={imgeUrl}/>
        {/* <img
          src={imgeUrl}
          className="img"
          alt=""
        /> */}
        <div className="value-panel">
          <h3 className="value v-temp">30^</h3>
          <p className="title-panel">temperetor</p>
        </div>
      </div>
    );
}

export default FutearDaysPanel;