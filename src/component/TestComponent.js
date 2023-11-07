import React from 'react';
import UseIP from './hooks/UseIP';
const TestComponent = () => {
  const userIP = UseIP();

  return (
    <div>
      <p>User IP Address: {userIP}</p>
    </div>
  );
};

export default TestComponent;


// این بخش برای تست کامپوننت ساخته شده