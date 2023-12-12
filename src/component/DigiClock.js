import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClockApp = () => {
  const [localTime, setLocalTime] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };

    fetchIP();
  }, []);

  useEffect(() => {
    const fetchLocalTime = async () => {
      if (ipAddress) {
        try {
          const response = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
          const { timezone } = response.data;
          const localDate = new Date().toLocaleTimeString(
            'en-US', { timeZone: timezone }
          );
          setLocalTime(localDate);
        } catch (error) {
          console.error('Error fetching local time:', error);
        }
      }
    };

    fetchLocalTime();
  }, [ipAddress]);

  function extractHour(inputString) {
    // Use regular expression to match the first number in the string
    const numberMatch = inputString.match(/\d+/);

    if (numberMatch) {
      let number = parseInt(numberMatch[0], 10); // Parse the matched number as an integer

      // Check if the string contains "pm" and add 12 to the number
      if (inputString.includes('PM')) {
        number = number === 12 ? 12 : number + 12;
      } else if (inputString.includes('AM') && number === 12) {
        number = 0;
      }

      return number;
    }

    return null; // Return null if no number is found in the string
  }

  // Test the function
  console.log(extractHour('6pm')); // Output: 18
  console.log(extractHour('8am')); // Output: 8
  console.log(extractHour('12am')); // Output: 0

  const hourFromLocalTime = extractHour(localTime);

  return hourFromLocalTime

};

export default ClockApp;