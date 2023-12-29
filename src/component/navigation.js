import { createContext, useState,useEffect } from "react";


const NavigationContext = createContext();

function NavProvider ({ children }) {
    const [currntPath,setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        const handler =() =>{
            setCurrentPath(window.location.pathname);

        };
        window.addEventListener('popstate',handler);

        return () =>{
            window.removeEventListener('popstate',handler);
        };

    }, []);

    const navigat =(to) =>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    };

return(
    <NavigationContext.Provider value={{currntPath,navigat}}>
        {children}
    </NavigationContext.Provider>
);
}
export{NavProvider}
export default NavigationContext;