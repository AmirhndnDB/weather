import ImageSelector from "./ImageSelector";
import { useSelector } from "react-redux";
import useTimeToMinutes from "../hooks/UsePersentHours";
import useTimeConversion from "../hooks/UseTimeConvertion";

function SunLocation(){
const LocationData = useSelector(state => state.times.presentTime);
const sunrise = LocationData?.forecast?.forecastday[0]?.astro?.sunrise;
const sunset =LocationData?.forecast?.forecastday[0]?.astro?.sunset;
const LocalTime = LocationData?.location?.localtime ; 



const time = '2023-12-01 20:30'
const nowTime = '1:23 PM' ;
const Z0 =useTimeToMinutes(sunrise) ;
const ZMax =useTimeToMinutes(sunset) ;
const Z = useTimeConversion(LocalTime) ;
const X0 = -8
const X =  (((Z - Z0)/(ZMax - Z0) )* 100) + X0 ; 
const b = 49 ; 
const a =  50 ;
const alfa = 42 ;
const beta = 45 ;
const delta = (a**2) - ((X - alfa)**2)
const Y = ((a*((delta)**(0.5)))/b) + beta ;







// console.log(sunrise);
// console.log(sunset);

// console.log(Z0,ZMax,Z,X,Y)

    return (
        <section className="grid-items sun-location">
          <div class="sun-box">
          <div>sunris</div>
          <div className="axis-sun">
           <ImageSelector  CN={"sun"} condition={"Sun"} X={X} Y={Y}/>
            <div className="erth-border-sun"></div>
          </div>
          <div>sunset</div>
        </div>
        <div className="sun-tims">
          <span className="sun-tims-items sun-tims-item-left">{sunrise}</span>
          <span className="sun-tims-items sun-tims-item-right" >{sunset}</span>
        </div>
        </section>
    );
}
export default SunLocation;



      

