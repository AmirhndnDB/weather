import { useState, useEffect } from 'react';

const useTimeConversion = (inputString) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (inputString) {
      const timeParts = inputString.split(' ');
      if (timeParts.length === 2) {
        const timeValue = timeParts[1]; // Extract the time part
        const [hours, minutes] = timeValue.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        setTime(totalMinutes);
      }
    }
  }, [inputString]);

  return time;
};

export default useTimeConversion;