import { useDispatch, useSelector } from "react-redux";
import { changeForcastPeriodType } from "../../store";
import FutearDay from "./FutearDay";
import FutearWeek from "./FutearWeek";
import Route from "./Route";
import { useCallback } from "react";
function FutearWeather() {
  const dispatch = useDispatch();
  const forcastPeriodType = useSelector(
    (state) => state.times.forcastPeriodType
  );

  const handleChangePeriodType = useCallback(
    (forcastPeriodType) => {
      dispatch(changeForcastPeriodType(forcastPeriodType));
    },
    [dispatch]
  );
  return (
    <section className="grid-items futer-weather">
      <div className="period-forcast-type">
        <button
          className={
            "btn-design-box " +
            (forcastPeriodType === "daily" ? "clicked-box " : " not-clicked")
          }
          onClick={() => handleChangePeriodType("daily")}
        >
          Daily Forecast
        </button>
        <button
          className={
            "btn-design-box " +
            (forcastPeriodType === "weekly" ? "clicked-box " : "not-clicked")
          }
          onClick={() => handleChangePeriodType("weekly")}
        >
          Weekly Forecast
        </button>
      </div>
      <Route Type="daily">
        <FutearDay />
      </Route>
      <Route Type="weekly">
        <FutearWeek />
      </Route>
    </section>
  );
}
export default FutearWeather;
