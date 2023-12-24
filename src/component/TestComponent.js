import React from 'react';
import UseIP from './hooks/UseIP';
import ClockApp from './DigiClock';
import useTimeToMinutes from './hooks/UsePersentHours';
import useHourFromTimeString from './hooks/useStringToHoursNumber';
import { useSelector } from "react-redux";
const TestComponent = () => {
  
  
  const userIP = UseIP();
  
  const LocationDatas = useSelector(state => state.times.presentTime);
  const LocalTime = LocationDatas?.location?.localtime ; 
  const timeString = "2023-12-13 15:07";
  const hours = useHourFromTimeString(LocalTime);
  const timePersen = useTimeToMinutes('11:59 PM');

  return (
    <div>
      <p>User IP Address: {userIP}</p>
      <p>{timePersen} </p>
      <p>Original time string: {timeString}</p>
      <p>Extracted hours: {hours}</p>
      <ClockApp/>
    </div>
  );
};

export default TestComponent;


// این بخش برای تست کامپوننت ساخته شده




