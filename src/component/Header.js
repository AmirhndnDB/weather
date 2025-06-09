import SearchLocation from "./SearchLocation";
import { useDispatch, useSelector } from "react-redux";
import { changeTemperType } from "../store";
function Header() {
  const dispatch = useDispatch();
  const temperType = useSelector((state) => state.times.temperType);

  const handleChangeTemperType = (temperType) => {
    dispatch(changeTemperType(temperType));
  };
  return (
    <header className="header">
      <SearchLocation className="search-location" />
      <select
        className="language-name-box"
        name="language"
        defaultValue={"ENG"}
      >
        <option value={"ENG"}>ENG</option>
        <option value={"FR"}>FR</option>
      </select>

      <div className="temper-type">
        <button
          className={
            "temper-type-box " +
            (temperType === "c" ? "clicked-box " : "not-clicked")
          }
          onClick={() => handleChangeTemperType("c")}
        >
          C°
        </button>
        <button
          className={
            "temper-type-box " +
            (temperType === "f" ? "clicked-box" : "not-clicked")
          }
          onClick={() => handleChangeTemperType("f")}
        >
          F°
        </button>
      </div>
    </header>
  );
}

export default Header;
