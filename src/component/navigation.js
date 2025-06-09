import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavProvider({ children }) {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setcurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setcurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavProvider };
export default NavigationContext;
