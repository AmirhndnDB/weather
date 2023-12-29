import React from 'react';
import UseIP from './hooks/UseIP';
import ClockApp from '../DigiClock';
import useTimeToMinutes from './hooks/UsePersentHours';
import useHourFromTimeString from './hooks/useStringToHoursNumber';
import { useSelector } from "react-redux";
import useFutureDate from './hooks/UseDateAndTime';
const TestComponent = () => {
  
  
  const userIP = UseIP();
  
  const LocationDatas = useSelector(state => state.times.presentTime);
  const LocalTime = LocationDatas?.location?.localtime ; 
  const timeString = "2023-12-13 15:07";
  const hours = useHourFromTimeString(LocalTime);
  const timePersen = useTimeToMinutes('11:59 PM');
  const { futureDate, futureDay } = useFutureDate(0); // Get the future date and day
  return (
    <div>
      <p>User IP Address: {userIP}</p>
      <p>{timePersen} </p>
      <p>Original time string: {timeString}</p>
      <p>Extracted hours: {hours}</p>
      <p>Tomorrow is {futureDay} ({futureDate})</p>
      <ClockApp/>
    </div>
  );
};

export default TestComponent;


// این بخش برای تست کامپوننت ساخته شده




