import { useState, useEffect } from 'react';

const useTimeToMinutes = (time) => {
  const [minutes, setMinutes] = useState(0);

  const convertTimeToMinutes = (timeString) => {
    const timeFormat = timeString.match(/(\d+):(\d+) (\w+)/);
    if (timeFormat) {
      let hours = parseInt(timeFormat[1], 10);
      const minutes = parseInt(timeFormat[2], 10);
      const period = timeFormat[3];
      if (period === 'PM' && hours < 12) {
        hours += 12;
      }
      setMinutes((hours * 60) + minutes);
    }
  };

  useEffect(() => {
    convertTimeToMinutes(time);
  }, [time]);

  return minutes;
};

export default useTimeToMinutes;