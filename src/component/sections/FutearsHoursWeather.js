import Iconz from "./Iconz";






function FutearHoursWeather ({condition}){
   return(
        <div className="pishbini-har-saat">
        <span>
        9:00
        </span>
        <Iconz  condition={condition}/>
        <span>45^</span>
      </div>
    );
}

export default FutearHoursWeather;