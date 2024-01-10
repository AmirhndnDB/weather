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
            <button className = {"btn-design-box " + (forcastPeriodType === 'daly' ?  'clicked-box ' :' not-clicked' )} 
            onClick={()=> handleChangePeriodType('daly')}
            >
                Daily Forecast
            </button>
            <button className={"btn-design-box " + (forcastPeriodType === 'weekly' ? "clicked-box " : "not-clicked")}
            onClick={()=> handleChangePeriodType('weekly')}
            >
                Weekly Forecast
            </button>
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