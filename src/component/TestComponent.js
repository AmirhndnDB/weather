import React from 'react';
import UseIP from './hooks/UseIP';
import ClockApp from './DigiClock';
import useTimeToMinutes from './hooks/UsePersentHours';
import useHourFromTimeString from './hooks/useStringToHoursNumber';
const TestComponent = () => {


  const userIP = UseIP();
  
  const timeString = "2023-12-13 11:07";
  const hours = useHourFromTimeString(timeString);


  const timePersen = useTimeToMinutes('11:59 PM' )
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




