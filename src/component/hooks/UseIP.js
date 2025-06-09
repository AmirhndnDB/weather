// hook component that gets IP (UseIP.js)
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import NavigationContext from "../navigation";

function UseIP() {
  const [ip, setIP] = useState("");
  const { currentPath } = useContext(NavigationContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
      } catch (error) {
        console.error("error fetching IP", error);
      }
    };

    if (currentPath === "/") {
      getData();
    }
  }, [currentPath]);

  return ip;
}

export default UseIP;

