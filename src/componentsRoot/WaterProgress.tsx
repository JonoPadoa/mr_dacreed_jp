import React, { useState, useEffect } from "react";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";

declare module "react" {
  interface CSSProperties {
    "--value"?: string;
    "--size"?: string;
    "--thickness"?: string;
    "--progress-line-color"?: string;
  }
}

const WaterProgress: React.FC = () => {
  const radialSize = "145px";
  const radialThickness = "6px";
  {
    /*  thickness of the circle bar   */
  }

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevValue) =>
        prevValue < 100 ? prevValue + 1 : prevValue
      );
    }, 100);
    {
      /*  speed of the circle bar   */
    }

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  // CalculateS borderOffset based on progressValue
  // const borderOffset = (progressValue / 100) * 360; // Adjust as needed
  const style = {
    "--value": progressValue,
    "--size": radialSize,
    "--thickness": radialThickness,
    "--progress-line-color": "#FF5733",
  } as unknown as React.CSSProperties;

  const calculateAnimationDuration = (prevValue: number) => {
    if (prevValue < 25) {
      return "wave1-5s"; // Choose an appropriate duration based on prevValue
    } else if (prevValue < 50) {
      return "wave1-10s";
    } else {
      return "wave1-15s";
    }
  };

  // Calculate prevValue based on progressValue
  const prevValue = Math.max(progressValue - 1, 0);

  const animationDurationClass = calculateAnimationDuration(prevValue);

  return (
    <div
      className="
    relative 
    flex 
    items-center
    justify-center
    
    "
    >
      <div
        className={`wpBase  
        {/* size of                                                          the  outer bg white circle */} flex h-[150px]  w-[150px]  
        items-center justify-center rounded-full bg-white ${animationDurationClass}`}
        style={{
          "--size": radialSize,
          "--thickness": radialThickness,
          "--progress-line-color": style["--progress-line-color"],
        }}
      >
        <div className=" absolute inset-0 flex items-center justify-center">
          <WaterWave2
            prevValue={prevValue}
            animationDurationClass={animationDurationClass}
          />
        </div>
        <div
          className="radial-progress text-4xl  font-bold text-accentd"
          style={style}
        >
          {progressValue}%
        </div>
      </div>
    </div>
  );
};

export default WaterProgress;
