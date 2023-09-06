import React from "react";
interface WaterWave2Props {
  prevValue: number;
  animationDurationClass: string;
}
const WaterWave2: React.FC<WaterWave2Props> = ({
  prevValue,
  animationDurationClass,
}) => {
  return (
    <div className="relative h-32 w-32 rounded-full bg-red-800  bg-clip-padding">
      <div className="circle absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-t from-accentd via-[#367592] to-[#5d93a3]">
        <div
          className={`wave1 absolute inset-0 h-[115px] w-[115px] -translate-x-1/2 
            -translate-y-1/2 transform
             rounded-[40%] 
             bg-white 
             ${animationDurationClass} 
             animate-wave1`}
        ></div>
        <div
          className="wave2 bottom-50 left-50 absolute h-[125px] w-[125px] -translate-x-1/2 
       -translate-y-1/2 transform 
      animate-wave2
       rounded-[40%]
       bg-white 
       opacity-50

      "
        ></div>
      </div>
    </div>
  );
};

export default WaterWave2;
