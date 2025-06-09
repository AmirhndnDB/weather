// CalculateAverageData.js
import { useSelector } from 'react-redux';

export const useCalculatedValues = () => {
  const LocationDatas = useSelector(state => state.times.presentTime);

  const forecastDays =LocationDatas?.forecast?.forecastday;
  if(!forecastDays||forecastDays.length <3)return[]

  const MaxWind1 =forecastDays[0]?.day?.maxwind_kph || 0;
  const MaxWind2 =forecastDays[1]?.day?.maxwind_kph || 0;
  const MaxWind3 =forecastDays[2]?.day?.maxwind_kph || 0;
  const Humidity3 =forecastDays[2]?.day?.avghumidity || 0;
  const Humidity2 =forecastDays[1]?.day?.avghumidity || 0;
  const Humidity1 =forecastDays[0]?.day?.avghumidity || 0;
  const Rainfall1 =forecastDays[0]?.day?.daily_will_it_rain || 0;
  const Rainfall2 =forecastDays[1]?.day?.daily_will_it_rain || 0;
  const Rainfall3 =forecastDays[2]?.day?.daily_will_it_rain || 0;
  const SnowFall1 =forecastDays[0]?.day?.daily_will_it_snow || 0;
  const SnowFall2 =forecastDays[1]?.day?.daily_will_it_snow || 0;
  const SnowFall3 =forecastDays[2]?.day?.daily_will_it_snow || 0;

  // console.log(Rainfall1,Rainfall2,Rainfall3,MaxWind1,MaxWind2,MaxWind3,Humidity1,Humidity2,Humidity3,SnowFall1,SnowFall2,SnowFall3)

  let randomnumber02 = Math.random() * 2;



  return [ 
  { 
    id: 1,
    month: "Jan",
    wind: MaxWind1,
    Humdy: Humidity1,
    rain: (Rainfall1 + SnowFall1) * 10 ,
  },

  {
    id: 2,
    month: "Feb",
    wind: MaxWind2,
    Humdy: Humidity2,
    rain: (Rainfall2 + SnowFall2) * 10,
  },
  {
    id: 3,
    month: "Mar",
    Humdy: Humidity3,
    rain : (Rainfall3 + SnowFall3) * 10,
    wind: MaxWind3,
  },
  {
    id: 4,
    month: "Apr",
    Humdy: Humidity1 * randomnumber02,
    rain: (Rainfall1 + Rainfall2 + SnowFall1 + SnowFall2 ) * 10 * randomnumber02,
    wind:  MaxWind1 * randomnumber02,
  },
  {
    id: 5,
    month: "May",
    Humdy: Humidity2 * randomnumber02,
    rain: (Rainfall1 + Rainfall2 + SnowFall2 + SnowFall3 ) * 10 * randomnumber02,
    wind: MaxWind2 * randomnumber02,
  },
  {
   id: 6,
   month: "Jun",
   Humdy: Humidity3 * randomnumber02,
   rain: (Rainfall3 + Rainfall2 + SnowFall2 + SnowFall1 ) * 10 * randomnumber02,
   wind: MaxWind3 * randomnumber02,
  },
  {
   id: 7,
   month: "Jul",
   Humdy: (Humidity1 + Humidity2) / 2,
   rain: 10 * (Rainfall2 + Rainfall1) / 2,
   wind:(MaxWind1 + MaxWind2) / 2,
  },
  {
   id: 8,
   month: "Aug",
   Humdy:(Humidity1 + Humidity3) / 2,
   rain: (Rainfall3  + SnowFall2 + SnowFall1 ) * 10 * randomnumber02/ 3,
   wind: (MaxWind1 + MaxWind3) / 2,
  },
  {
   id: 9,
   month: "Sep",
   Humdy: (Humidity2 + Humidity3) / 2,
   rain: (Rainfall3 + Rainfall2 + SnowFall2 + SnowFall1 ) * 10 * randomnumber02/ 2,
   wind: (MaxWind3 + MaxWind2) / 2,
  },
  {
   id: 10,
   month: "Oct",
   Humdy:(Humidity1 + Humidity2 + Humidity3) / 3,
   rain: (Rainfall3 + Rainfall2 + Rainfall1) / 3,
   wind: (MaxWind1 + MaxWind2 + MaxWind3) / 3,
  },
  {
   id: 11,
   month: "Nov",
   Humdy: (Humidity2 + Humidity1) ,
   rain:  (Rainfall3) * randomnumber02* 10,
   wind:  (MaxWind3 + MaxWind1 + MaxWind2) / 2
  },
  {
   id: 12,
   month: "Dec",
   Humdy: Humidity3 * randomnumber02,
   rain: SnowFall3 * randomnumber02,
   wind: (MaxWind1 + MaxWind2) * randomnumber02,
  },
  ]
};


