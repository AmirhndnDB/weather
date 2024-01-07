import React from 'react';
import UseIP from './hooks/UseIP';
import ClockApp from '../DigiClock';
const TestComponent = () => {
  
  
  const userIP = UseIP();
  

  return (
    <div className={'Test-component'}>
      <p>User IP Address: {userIP}</p>
      <ClockApp/>
    </div>
  );
};

export default TestComponent;


// این بخش برای تست کامپوننت ساخته شده




