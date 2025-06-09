

 import { Skeleton } from "@mui/material";

export default function ClockAppSkeleton() {
  return (
        <div className="clock-app grid-items"> 
          <h3 className="Local-time">Local Time </h3>

           <p className="Show-time">        
           <Skeleton
             variant="rectangular"
             animation="wave"
             width="100%"
             height={"2.25rem"}
             sx={{
              borderRadius:'0.8rem',
              backgroundColor:'rgba(255,255,255,0.2)',
              transform:"none"
             }}
             />
             </p> 
           </div> 

  );
}
