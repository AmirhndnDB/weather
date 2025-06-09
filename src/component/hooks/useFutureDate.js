import { useEffect, useState } from "react";
import moment from "moment/moment";

const useFutureDate = (numOfDays, withDayName = true) => {
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    const future = moment().add(numOfDays, "days");
    setDate(future.format("YYYY-MM-DD"));

    if (withDayName) {
      setDay(future.format("ddd")); // like "Mon", "Tue", etc.
    }
  }, [numOfDays, withDayName]);

  return withDayName
    ? { futureDate: date, futureDay: day }
    : { futureDatePelass: date };
};

export default useFutureDate;
