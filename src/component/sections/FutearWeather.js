import FutearDaysPanel from "./FutearDaysPanel";
function FutearWeather(){
    return (
        <section className="grid-items futer-weather" >
            <div className="period-forcast-type">
          <div className="btn-design-box first-btn-box">
            <button className="btn-design first-btn">Daily Forecast</button>
          </div>
          <div className="btn-design-box secend-btn-box">
            <button className="btn-design secend-btn">Weekly Forecast</button>
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