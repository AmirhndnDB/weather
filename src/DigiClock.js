
import  { useState, useEffect } from "react";
 import axios from "axios";
  const ClockApp = () => { const [localTime, setLocalTime] = useState("");
     const [timezone, setTimezone] = useState("");
      useEffect(() => {
   const fetchTimezoneFromIP = async () => { 
    try { const ipRes = await axios.get("https://api.ipify.org?format=json");
       const ip = ipRes.data.ip; const tzRes = await axios.get(`https://ipapi.co/${ip}/json/`);
        setTimezone(tzRes.data.timezone); 
      } catch (error) {
       console.error("Error fetching IP or Timezone:", error); 
      } }; fetchTimezoneFromIP(); 
    }, []); 
    useEffect(() => { if (!timezone) return;
       const updateClock = () => {
       const now = new Date().toLocaleTimeString("en-US", { timeZone: timezone, });
        setLocalTime(now); }; updateClock();
      const interval = setInterval(updateClock, 1000);
       return () => clearInterval(interval); }, [timezone]); 
      return ( 
        <div className="clock-app grid-items"> 
          <h3 className="Local-time">Local Time </h3>

           <p className="Show-time"> {localTime || "Loading..."}</p> 
           </div> 
           ); 
         }; 
           export default ClockApp;