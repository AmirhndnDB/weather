import FutearDaysPanel from "./FutearDaysPanel";
function FutearWeather(){
    return (
        <section className="grid-items futer-weather" >
            <div className="period-forcast-type">
          <div className="btn-design-box first-btn-box">
            <button className="btn-design first-btn">"k"</button>
          </div>
          <div className="btn-design-box secend-btn-box">
            <button className="btn-design secend-btn">"q"</button>
          </div>
        </div>
        <div className="days">
        <FutearDaysPanel dayNumber={0}/>
        <FutearDaysPanel dayNumber={1}/>
        <FutearDaysPanel dayNumber={2}/>
        <FutearDaysPanel dayNumber={3}/>
        <FutearDaysPanel dayNumber={4}/>
        <FutearDaysPanel dayNumber={5}/>
        </div>
        </section>
    );
}
export default FutearWeather;