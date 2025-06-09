import FutearDaysPanel from "./FutearDaysPanel";
function FutearDay() {
  const forcastDays = [
    { dayNumber: 1, futearCast: 0 },
    { dayNumber: 2, futearCast: 1 },
    { dayNumber: 3, futearCast: 2 },
    { dayNumber: 4, futearCast: 1 },
    { dayNumber: 5, futearCast: 2 },
    { dayNumber: 6, futearCast: 0 },
  ];

  return (
    <div className="days">
      {forcastDays.map(({ dayNumber, futearCast }) => (
        <FutearDaysPanel
          key={dayNumber}
          dayNumber={dayNumber}
          futearCast={futearCast}
        />
      ))}
    </div>
  );
}

export default FutearDay;
