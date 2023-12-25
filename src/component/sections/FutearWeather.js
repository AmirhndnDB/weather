import { useDispatch,useSelector } from "react-redux";
import { changeForcastPeriodType } from "../../store";
import FutearDay from "./FutearDay";
import FutearWeek from "./FutearWeek";
import Route from "./Route";
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
        <Route Type='daly'>
          <FutearDay/>
        </Route>
        <Route Type='weekly'>
          <FutearWeek/>
        </Route>
        </section>
    );
}
export default FutearWeather;