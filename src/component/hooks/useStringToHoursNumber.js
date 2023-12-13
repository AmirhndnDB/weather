import { useState, useEffect } from 'react';

const useHourFromTimeString = (timeString) => {
  const [hours, setHours] = useState(null);

  useEffect(() => {
    const extractHour = (inputString) => {
      const date = new Date(inputString);
      const hours = date.getHours();
      setHours(hours);
    };

    if (timeString) {
      extractHour(timeString);
    }
  }, [timeString]);

  return hours;
};

export default useHourFromTimeString;


