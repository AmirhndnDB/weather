import { useEffect, useState } from 'react';
import moment from 'moment/moment';
const useFutureDatePelass = (numOfDays) => {
  const [futureDatePelass, setFutureDatePelass] = useState(null);

  useEffect(() => {
    const calculateFutureDatePelass = () => {
      const currentDate = moment(); // Get the current date using moment
      const futureDatePelass = currentDate.add(numOfDays, 'days'); // Calculate future date

      setFutureDatePelass(futureDatePelass.format('YYYY-MM-DD'));
    };

    calculateFutureDatePelass();
  }, [numOfDays]);

  return { futureDatePelass};
};

export default useFutureDatePelass;