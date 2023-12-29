import FutearHoursWeather from "./FutearsHoursWeather";
import WeatherInformationData from "./WeatherInformationData";
import { useDispatch,useSelector } from "react-redux";
import ImageSelector from "../../store/ImageSelector";





function MainForcastPanel({hour}){
    const dispatch = useDispatch();

    const temperType = useSelector(state => state.times.temperType);
    const LocationDatas = useSelector(state => state.times.presentTime);

    const conditionText = LocationDatas?.current?.condition?.text  ||0;
    const LocalTime = LocationDatas?.location?.localtime ||0; 
    const CelcTemper = LocationDatas?.current?.temp_c  ||0;
    const FarenTemper = LocationDatas?.current?.temp_f  ||0;
    const Humidity = LocationDatas?.current?.humidity  ||0;
    const WindSpid = LocationDatas?.current?.wind_kph  ||0;
    const maxTempC = LocationDatas?.forecast?.forecastday[0]?.day?.maxtemp_c ||0;
    const minTempC = LocationDatas?.forecast?.forecastday[0]?.day?.mintemp_c ||0;
    const maxTempF = LocationDatas?.forecast?.forecastday[0]?.day?.maxtemp_f ||0;
    const minTempF = LocationDatas?.forecast?.forecastday[0]?.day?.mintemp_f ||0;
    const hours = hour
    // console.log(conditionText,LocalTime);
//     console.log(maxTempC);
//    console.log(hours)
   let oneH = (hours === 23 ? 0: hours + 1); 
   let towH = (oneH === 23 ? 0 : oneH + 1) ;
   let threH = (towH === 23 ? 0 : towH + 1); 
   let forH =  (threH === 23 ? 0: threH + 1); 
   let foiveH =  (forH === 23 ? 0 :forH + 1); 
   let sixH =  (foiveH === 23 ? 0 :foiveH + 1); 
   let sevenH =  (sixH === 23 ? 0 :sixH + 1);
 

   
   


   


   return (
       <section className="grid-items the-header-weather">
            <div className="date-time">
                {LocalTime}
                
            </div>
            <div className="data-from-api">
                <div className="icon-box">
                  <ImageSelector CN={"weather-icon-image"} condition={conditionText} />
                <p className="kind-of-weather">{conditionText} 
                  {temperType === 'c'
                  ? minTempC 
                  : minTempF}-
                  {temperType === 'c' 
                  ? maxTempC 
                  : maxTempF}
                </p>
                </div>
                <WeatherInformationData title= {"temperetoure"} value={
                    temperType === 'c'
                    ? CelcTemper
                    : FarenTemper
                    } mark={
                        temperType === 'c'
                        ? 'C^'
                        : 'F^'
                        } />
                <WeatherInformationData title= {"humidity"} value={Humidity} mark={"%"} />
                <WeatherInformationData title= {"windSpid"} value={WindSpid} mark={"km/h"}/>
            </div>

            <div className="pishbini-havaye-aty">
                <FutearHoursWeather hoursNumb={oneH}  />
                <FutearHoursWeather hoursNumb={towH} />
                <FutearHoursWeather hoursNumb={threH} />
                <FutearHoursWeather hoursNumb={forH} />
                <FutearHoursWeather hoursNumb={foiveH} />
                <FutearHoursWeather hoursNumb={sixH } />
                <FutearHoursWeather hoursNumb={sevenH } />
            </div>
        </section>
    );
}
export default MainForcastPanel;



