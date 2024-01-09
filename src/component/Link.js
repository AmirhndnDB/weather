import { useContext } from "react";
import NavigationContext from "./navigation";
function Link({to,children}){
    const{navigat} =  useContext(NavigationContext);
    const handleClick =(event)=>{
        event.preventDefault();
        navigat(to)
    };
    return <a className="LINK" onClick={handleClick}>{children}</a>

}


export default Link ;