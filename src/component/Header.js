import SearchLocation from "./SearchLocation";
import { useDispatch ,useSelector} from "react-redux";
import { changeTemperType } from "../store";
function Header(){

   const  dispatch = useDispatch()
   const temperType = useSelector(state => state.times.temperType);

   const handleChangeTemperType = (temperType) =>{
    dispatch(changeTemperType(temperType));

   }
    return (
        <header className="header">
            <SearchLocation className="search-location"/>
            <div className="language-name-box">
                <select className="language-name"  name="job" id="job">
                     <option >ENG</option>
                     <option>Fr</option>
                </select>
            </div>
            <div className="temper-type">
                <div className={"temper-type-box " + (temperType === 'c' ? 'celcios-box ': 'not-clicked')}
                onClick={() => handleChangeTemperType('c')}
                >
                    <button className={"temper-type-item " + (temperType === 'c' ? 'celcios' : 'not-clicked')}>C^</button>
                    </div>
                    <div
                    className={"temper-type-box " + (temperType === 'f' ? 'faren-box' : 'not-clicked')}
                    onClick={() => handleChangeTemperType('f')}
                    >
                    <button className={"temper-type-item " + (temperType === 'f' ? 'faren' : 'not-clicked')}>F^</button>
                </div>
            </div>
        </header>
        );
}


export default  Header;