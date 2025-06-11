import { useState, useEffect } from "react";
import axios from "axios";

const useLocalTime = (ip) => {
  const [hourFromLocalTime, setHourFromLocalTime] = useState(null);

  useEffect(() => {
    const fetchLocalTime = async () => {
      if (!ip) return;
      try {
        const timeResponse = await axios.get(`https://ipapi.co/${ip}/json/`);
        const { timezone } = timeResponse.data;
        const localDate = new Date().toLocaleTimeString("en-US", {
          timeZone: timezone,
        });
        const hour = extractHour(localDate);
        setHourFromLocalTime(hour);
      } catch (error) {
        console.error("Error fetching local time:", error);
      }
    };

    fetchLocalTime();
  }, [ip]);

  const extractHour = (inputString) => {
    const match = inputString.match(/\d+/);
    if (!match) return null;

    let hour = parseInt(match[0], 10);
    if (inputString.includes("PM") && hour !== 12) hour += 12;
    if (inputString.includes("AM") && hour === 12) hour = 0;
    return hour;
  };

  return hourFromLocalTime;
};

export default useLocalTime;
