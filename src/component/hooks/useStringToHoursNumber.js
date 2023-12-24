import { useState, useEffect } from 'react';

const useHourFromTimeString = (inputString) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (inputString) {
      const timeParts = inputString.split(' ');
      if (timeParts.length === 2) {
        const timeValue = timeParts[1]; // Extract the time part
        const [hours, minutes] = timeValue.split(':').map(Number);
        const Hours = hours
        setTime(Hours);
     }
    }
  }, [inputString]);

  return time;
};



export default useHourFromTimeString;


