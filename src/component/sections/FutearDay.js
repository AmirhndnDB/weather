
import FutearDaysPanel from "./FutearDaysPanel"
function FutearDay(){

    return( 
    <div className="days">
        <FutearDaysPanel  dayNumber={1} futearCast={0} />
        <FutearDaysPanel  dayNumber={2}futearCast={1} />
        <FutearDaysPanel  dayNumber={3}futearCast={2} />
        <FutearDaysPanel  dayNumber={4}futearCast={1} />
        <FutearDaysPanel  dayNumber={5}futearCast={2} />
        <FutearDaysPanel  dayNumber={6}futearCast={0} />
    </div>
    )
}

export default FutearDay ;