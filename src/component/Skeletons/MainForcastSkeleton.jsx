import { Skeleton } from "@mui/material";

function MainForecastSkeleton() {
  return (
    <section className="grid-items the-header-weather the-header-weather-skelet">
      <div className="date-time">
        <Skeleton width={130} height={30} />
      </div>

      <div className="data-from-api">
        <div className="icon-box">
          <Skeleton
            className="weather-icon-image"
            sx={{ marginTop: -2 }}
            width={100}
            height={100}
          />
          <Skeleton
            className="kind-of-weather fix-space-skeleton"
            width={100}
            height={20}
            sx={{ marginTop: -2 }}
          />
        </div>

        <div className="information-box value-box">
          <Skeleton className="value" width={110} height={100} />
          <Skeleton
            className="title"
            width={100}
            height={20}
            sx={{ marginTop: -2 }}
          />
        </div>

        <div className="information-box value-box">
          <Skeleton className="value" width={110} height={100} />
          <Skeleton
            className="title"
            width={110}
            height={20}
            sx={{ marginTop: -2 }}
          />
        </div>

        <div className="information-box value-box">
          <Skeleton className="value" width={130} height={100} />
          <Skeleton
            className="title"
            width={100}
            height={20}
            sx={{ marginTop: -2 }}
          />
        </div>
      </div>

      <div className="pishbini-havaye-aty pishbini-havaye-aty-skeleton">
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="pishbini-har-saat" key={i}>
            <Skeleton className="span" width={47} height={26} />
            <Skeleton width={25} height={26} />
            <Skeleton className="span" width={47} height={26} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainForecastSkeleton;

// import { Skeleton } from "@mui/material";
// function MainForcastSkeleton() {
//   return (
//     <section className="grid-items the-header-weather the-header-weather-skelet">
//       <div className="date-time">
//         <Skeleton width={130} height={30} />
//       </div>
//       <div className="data-from-api">
//         <div className="icon-box">
//           <Skeleton
//             className="weather-icon-image"
//             sx={{ marginTop: -2 }}
//             width={100}
//             height={100}
//           />
//           <Skeleton
//             className="kind-of-weather fix-space-skeleton"
//             width={100}
//             height={20}
//             sx={{ marginTop: -2 }}
//           />
//         </div>
//         <div className="information-box value-box">
//           <Skeleton className="value" width={110} height={100} />
//           <Skeleton
//             className="title"
//             width={100}
//             height={20}
//             sx={{ marginTop: -2 }}
//           />
//         </div>
//         <div className="information-box value-box">
//           <Skeleton className="value" width={110} height={100} />
//           <Skeleton
//             className="title"
//             width={110}
//             height={20}
//             sx={{ marginTop: -2 }}
//           />
//         </div>
//         <div className="information-box value-box">
//           <Skeleton className="value" width={130} height={100} />
//           <Skeleton
//             className="title"
//             width={100}
//             height={20}
//             sx={{ marginTop: -2 }}
//           />
//         </div>
//       </div>
//       <div className="pishbini-havaye-aty">
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//         <div className="pishbini-har-saat">
//           <Skeleton className="span" width={47} height={26} />
//           <Skeleton width={25} height={26} />
//           <Skeleton className="span" width={47} height={26} />
//         </div>
//       </div>
//     </section>
//   );
// }
// export default MainForcastSkeleton;
