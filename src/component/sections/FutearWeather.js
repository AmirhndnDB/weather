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
        <FutearDaysPanel  dayNumber={0} futearCast={0} />
        <FutearDaysPanel  dayNumber={1}futearCast={1} />
        <FutearDaysPanel  dayNumber={2}futearCast={2} />
        <FutearDaysPanel  dayNumber={3}futearCast={0} />
        <FutearDaysPanel  dayNumber={4}futearCast={1} />
        <FutearDaysPanel  dayNumber={5}futearCast={2} />
        </div>
        </section>
    );
}
export default FutearWeather;