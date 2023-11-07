import SearchLocation from "./SearchLocation";
function Header(){
    return (
        <header className="header">
            <SearchLocation className="search"/>
            <div className="language-name-box">
                <select className="language-name"  name="job" id="job">
                     <option >ENG</option>
                     <option>Fr</option>
                </select>
            </div>
            <div className="temper-type">
                <div className="celcios">
                    <button className="temper-type-item celcios">C^</button>
                </div>
                <div>
                    <button className="temper-type-item" id="faren">F^</button>
                </div>
            </div>
        </header>
        );
}


export default  Header;



