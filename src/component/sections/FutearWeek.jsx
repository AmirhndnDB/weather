import FutearWeekPanel from "./FutearWeekPanel";
function FutearWeek() {
  const weekPanels = [
    { from: 7, to: 13, cast: 1 },
    { from: 14, to: 20, cast: 1 },
    { from: 21, to: 27, cast: 1 },
    { from: 28, to: 34, cast: 1 },
    { from: 35, to: 41, cast: 1 },
    { from: 42, to: 48, cast: 1 },
  ];

  return (
    <div className="days">
      {weekPanels.map((item, idx) => (
        <FutearWeekPanel
          key={idx}
          dayNumberFrom={item.from}
          dayNumberTill={item.to}
          futearCast={item.cast}
        />
      ))}
    </div>
  );
}

export default FutearWeek;
