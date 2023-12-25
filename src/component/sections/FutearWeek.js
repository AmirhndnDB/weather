
import FutearWeekPanel from "./FutearWeekPanel";
function FutearWeek(){

    return( 
    <div className="days">
        <FutearWeekPanel  dayNumberFrom={7} dayNumberTill={13}  futearCast={1} />
        <FutearWeekPanel  dayNumberFrom={14} dayNumberTill={20} futearCast={1} />
        <FutearWeekPanel  dayNumberFrom={21} dayNumberTill={27} futearCast={0} />
        <FutearWeekPanel  dayNumberFrom={28} dayNumberTill={34} futearCast={1} />
        <FutearWeekPanel  dayNumberFrom={35} dayNumberTill={35} futearCast={2} />
        <FutearWeekPanel  dayNumberFrom={42} dayNumberTill={41} futearCast={0} />
    </div>
    )
}

export default FutearWeek ;