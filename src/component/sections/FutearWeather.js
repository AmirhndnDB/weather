import { useDispatch,useSelector } from "react-redux";
import { changeForcastPeriodType } from "../../store";
import FutearDaysPanel from "./FutearDaysPanel";
function FutearWeather(){

  const dispatch = useDispatch();
  const forcastPeriodType = useSelector(state => state.times.forcastPeriodType);


  const handleChangePeriodType = (forcastPeriodType) =>{
    dispatch(changeForcastPeriodType(forcastPeriodType))
  }



    return (
        <section className="grid-items futer-weather" >
        <div className="period-forcast-type">
            <div className = {"btn-design-box " + (forcastPeriodType === 'daly' ?  'first-btn-box' :' not-clicked' )} 
            onClick={()=> handleChangePeriodType('daly')}
            >
              <button className={"btn-design  " +  (forcastPeriodType  === 'daly' ? 'first-btn' : 'not-clicked')}>Daily Forecast</button>
            </div>
            <div className={"btn-design-box " + (forcastPeriodType === 'weekly' ? "secend-btn-box" : "not-clicked")}
            onClick={()=> handleChangePeriodType('weekly')}
            >
              <button className={"btn-design " + (forcastPeriodType === 'weekly' ? "secend-btn" : "not-clicked")}>Weekly Forecast</button>
            </div>
        </div>
        <div className="days">
        <FutearDaysPanel imgeUrl={"sunny"} dayNumber={0}/>
        <FutearDaysPanel imgeUrl={"SunShower"} dayNumber={1}/>
        <FutearDaysPanel imgeUrl={"blusteri"} dayNumber={2}/>
        <FutearDaysPanel imgeUrl={"snowy"} dayNumber={3}/>
        <FutearDaysPanel imgeUrl={"rainy"} dayNumber={4}/>
        <FutearDaysPanel imgeUrl={"tunderStorm"} dayNumber={5}/>
        </div>
        </section>
    );
}
export default FutearWeather;