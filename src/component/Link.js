import { useContext } from "react";
import NavigationContext from "./navigation";
function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} className="LINK" onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
