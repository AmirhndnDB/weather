import { useContext } from "react";
import NavigationContext from "./navigation";

function MainRoute({ path, children }) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default MainRoute;
