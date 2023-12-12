import React from 'react';
import UseIP from './hooks/UseIP';
import ClockApp from './DigiClock';
import useTimeToMinutes from './hooks/UsePersentHours';
const TestComponent = () => {


  const userIP = UseIP();


  const timePersen = useTimeToMinutes('11:59 PM' )
  return (
    <div>
      <p>User IP Address: {userIP}</p>
      <p>{timePersen} </p>
      <ClockApp/>
    </div>
  );
};

export default TestComponent;


// این بخش برای تست کامپوننت ساخته شده