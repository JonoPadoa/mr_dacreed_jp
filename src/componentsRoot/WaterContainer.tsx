import React from "react";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";

const WaterContainer = () => {
  return (
    <div className="h-130 w-130 overflow-hidden rounded-full bg-white bg-clip-content">
      <div
        className="circle  flex h-[90px] w-[90px] rounded-full bg-gradient-to-t from-accentd via-[#367592] to-[#5d93a3]"
      >
        <WaterWave2 prevValue={0} animationDurationClass={""} />
      </div>
    </div>
  );
};

export default WaterContainer;
