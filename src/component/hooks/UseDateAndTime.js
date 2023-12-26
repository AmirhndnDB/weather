import { useEffect, useState } from 'react';
import moment from 'moment/moment';
const useFutureDate = (numOfDays) => {
  const [futureDate, setFutureDate] = useState(null);
  const [futureDay, setFutureDay] = useState(null);

  useEffect(() => {
    const calculateFutureDate = () => {
      const currentDate = moment(); // Get the current date using moment
      const futureDate = currentDate.add(numOfDays, 'days'); // Calculate future date
      const futureDay = futureDate.format('ddd'); // Get the day of the week

      setFutureDate(futureDate.format('YYYY-MM-DD'));
      setFutureDay(futureDay);
    };

    calculateFutureDate();
  }, [numOfDays]);

  return { futureDate, futureDay };
};

export default useFutureDate;