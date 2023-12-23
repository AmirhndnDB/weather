// import { useSelector } from "react-redux";

// function CalculateAvrageData(){
//     const LocationDatas = useSelector(state => state.times.presentTime);

//     const MaxWind1 = LocationDatas?.forecast?.forecastday[0]?.day?.maxwind_kph;
//     const MaxWind2 = LocationDatas?.forecast?.forecastday[1]?.day?.maxwind_kph;
//     const MaxWind3 = LocationDatas?.forecast?.forecastday[2]?.day?.maxwind_kph;
//     const Humidity3 = LocationDatas?.forecast?.forecastday[2]?.day?.avghumidity;
//     const Humidity2 = LocationDatas?.forecast?.forecastday[1]?.day?.avghumidity;
//     const Humidity1 = LocationDatas?.forecast?.forecastday[0]?.day?.avghumidity;
//     const Rainfall1 = LocationDatas?.forecast?.forecastday[0]?.day?.daily_will_it_rain;
//     const Rainfall2 = LocationDatas?.forecast?.forecastday[1]?.day?.daily_will_it_rain;
//     const Rainfall3 = LocationDatas?.forecast?.forecastday[2]?.day?.daily_will_it_rain;
//     const SnowFall1 = LocationDatas?.forecast?.forecastday[0]?.day?.daily_will_it_snow;
//     const SnowFall2 = LocationDatas?.forecast?.forecastday[1]?.day?.daily_will_it_snow;
//     const SnowFall3 = LocationDatas?.forecast?.forecastday[2]?.day?.daily_will_it_snow;

//     let randomnumber02 = Math.random() * 2;
//     const wind1 = MaxWind1 ;
//     const wind2 = MaxWind2 ;
//     const wind3 =  MaxWind3 ;
//     const wind4 = MaxWind1 * randomnumber02 ;
//     const wind5 = MaxWind2 * randomnumber02 ;
//     const wind6 = MaxWind3 * randomnumber02 ;
//     const wind7 = (MaxWind1 + MaxWind2)/2 ;
//     const wind8 = (MaxWind1 + MaxWind3)/2 ;
//     const wind9 = (MaxWind3 + MaxWind2)/2 ;
//     const wind10 = (MaxWind1 + MaxWind2 + MaxWind3 )/3 ;
//     const wind11 = (wind6 + MaxWind2)/2 ;
//     const wind12 = wind11 * randomnumber02 ;
//     const Humid1 = Humidity1 ;
//     const Humid2 = Humidity2 ;
//     const Humid3 =  Humidity3 ;
//     const Humid4 = Humidity1 * randomnumber02 ;
//     const Humid5 = Humidity2 * randomnumber02 ;
//     const Humid6 = Humidity3 * randomnumber02 ;
//     const Humid7 = (Humidity1 + Humidity2)/2 ;
//     const Humid8 = (Humidity1 + Humidity3)/2 ;
//     const Humid9 = (Humidity2 + Humidity3)/2 ;
//     const Humid10 = (Humidity1 + Humidity2 + Humidity3 )/3 ;
//     const Humid11 = (Humid5 + Humid9)/2 ;
//     const Humid12 = Humid11 * randomnumber02 ;
//     const rainfall1 =( Rainfall1 + SnowFall1) * 10 ;
//     const rainfall2 = (Rainfall2 + SnowFall2) * 10 ;
//     const rainfall3 = (Rainfall3 + SnowFall3) * 10 ;
//     const rainfall4 = rainfall1 * randomnumber02 ;
//     const rainfall5 = rainfall2 * randomnumber02 ;
//     const rainfall6 = rainfall3 * randomnumber02 ;
//     const rainfall7 = (rainfall1 + rainfall2 )/2 ;
//     const rainfall8 = (rainfall1 + rainfall3)/2 ;
//     const rainfall9 = (rainfall2 + rainfall3)/2 ;
//     const  rainfall10 =(rainfall1 + rainfall2 + rainfall3)/3 ;
//     const rainfall11 = (rainfall10 ) * randomnumber02 ;
//     const rainfall12 = rainfall9 * randomnumber02 ;


    




// }

// export default CalculateAvrageData;


// CalculateAverageData.js
import { useSelector } from 'react-redux';

export const useCalculatedValues = () => {
  const LocationDatas = useSelector(state => state.times.presentTime);

  const MaxWind1 = LocationDatas?.forecast?.forecastday[0]?.day?.maxwind_kph || 0;
  const MaxWind2 = LocationDatas?.forecast?.forecastday[1]?.day?.maxwind_kph || 0;
  const MaxWind3 = LocationDatas?.forecast?.forecastday[2]?.day?.maxwind_kph || 0;
  const Humidity3 = LocationDatas?.forecast?.forecastday[2]?.day?.avghumidity || 0;
  const Humidity2 = LocationDatas?.forecast?.forecastday[1]?.day?.avghumidity || 0;
  const Humidity1 = LocationDatas?.forecast?.forecastday[0]?.day?.avghumidity || 0;
  const Rainfall1 = LocationDatas?.forecast?.forecastday[0]?.day?.daily_will_it_rain || 0;
  const Rainfall2 = LocationDatas?.forecast?.forecastday[1]?.day?.daily_will_it_rain || 0;
  const Rainfall3 = LocationDatas?.forecast?.forecastday[2]?.day?.daily_will_it_rain || 0;
  const SnowFall1 = LocationDatas?.forecast?.forecastday[0]?.day?.daily_will_it_snow || 0;
  const SnowFall2 = LocationDatas?.forecast?.forecastday[1]?.day?.daily_will_it_snow || 0;
  const SnowFall3 = LocationDatas?.forecast?.forecastday[2]?.day?.daily_will_it_snow || 0;

  console.log(Rainfall1,Rainfall2,Rainfall3,MaxWind1,MaxWind2,MaxWind3,Humidity1,Humidity2,Humidity3,SnowFall1,SnowFall2,SnowFall3)

  let randomnumber02 = Math.random() * 2;

  return {
    wind1: MaxWind1,
    wind2: MaxWind2,
    wind3: MaxWind3,
    wind4: MaxWind1 * randomnumber02,
    wind5: MaxWind2 * randomnumber02,
    wind6: MaxWind3 * randomnumber02,
    wind7: (MaxWind1 + MaxWind2) / 2,
    wind8: (MaxWind1 + MaxWind3) / 2,
    wind9: (MaxWind3 + MaxWind2) / 2,
    wind10: (MaxWind1 + MaxWind2 + MaxWind3) / 3,
    wind11: (MaxWind3 + MaxWind1 + MaxWind2) / 2,
    wind12: (MaxWind1 + MaxWind2) * randomnumber02,
    Humid1: Humidity1,
    Humid2: Humidity2,
    Humid3: Humidity3,
    Humid4: Humidity1 * randomnumber02,
    Humid5: Humidity2 * randomnumber02,
    Humid6: Humidity3 * randomnumber02,
    Humid7: (Humidity1 + Humidity2) / 2,
    Humid8: (Humidity1 + Humidity3) / 2,
    Humid9: (Humidity2 + Humidity3) / 2,
    Humid10: (Humidity1 + Humidity2 + Humidity3) / 3,
    Humid11: (Humidity2 + Humidity1) ,
    Humid12: Humidity3 * randomnumber02,
    rainfall1: (Rainfall1 + SnowFall1) * 10,
    rainfall2: (Rainfall2 + SnowFall2) * 10,
    rainfall3: (Rainfall3 + SnowFall3) * 10,
    rainfall4: (Rainfall1 + Rainfall2 + SnowFall1 + SnowFall2 ) * 10 * randomnumber02,
    rainfall5: (Rainfall1 + Rainfall2 + SnowFall2 + SnowFall3 ) * 10 * randomnumber02,
    rainfall6: (Rainfall3 + Rainfall2 + SnowFall2 + SnowFall1 ) * 10 * randomnumber02,
    rainfall7: 10 * (Rainfall2 + Rainfall1) / 2,
    rainfall8: (Rainfall3  + SnowFall2 + SnowFall1 ) * 10 * randomnumber02/ 3,
    rainfall9: (Rainfall3 + Rainfall2 + SnowFall2 + SnowFall1 ) * 10 * randomnumber02/ 2,
    rainfall10: (Rainfall3 + Rainfall2 + Rainfall1) / 3,
    rainfall11: (Rainfall3) * randomnumber02* 10,
    rainfall12: SnowFall3 * randomnumber02,
  };
};