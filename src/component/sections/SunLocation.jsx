import ImageSelector from "../../store/ImageSelector";
import { useSelector } from "react-redux";
import CalculateSunLoc from "../../store/CalculateSunLocation";

function SunLocation() {
  const LocationData = useSelector((state) => state.times.presentTime);
  const sunrise = LocationData?.forecast?.forecastday[0]?.astro?.sunrise;
  const sunset = LocationData?.forecast?.forecastday[0]?.astro?.sunset;
  const LocalTime = LocationData?.location?.localtime;
  const { X, Y, delta } = CalculateSunLoc(sunrise, sunset, LocalTime);

  return (
    <section className="grid-items sun-location">
      <div className="sun-box">
        <div className="sun-rise">sunrise</div>
        <div className="axis-sun">
          <ImageSelector
            CN={delta >= 0 ? "sun" : "sun-none" || "defult-sun"}
            condition={"Sun"}
            X={X}
            Y={Y}
          />
          <div className="erth-border-sun"></div>
        </div>
        <div className="sun-set">sunset</div>
      </div>
      <div className="sun-tims">
        <span className="sun-tims-items sun-tims-item-left">{sunrise}</span>
        <span className="sun-tims-items sun-tims-item-right">{sunset}</span>
      </div>
    </section>
  );
}
export default SunLocation;


