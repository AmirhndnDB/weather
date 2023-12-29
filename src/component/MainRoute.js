import { useContext } from "react";
import NavigationContext from "./navigation";

function MainRoute ({path,children}){
    const {currntPath} = useContext(NavigationContext);

    if(path === currntPath){
        return children ;

    }

    return null

}


export default MainRoute;