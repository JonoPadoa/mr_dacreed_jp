import React, { useState, useEffect } from "react";
import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";

interface WaterWave2Props {
  prevValue: number;
}

declare module "react" {
  interface CSSProperties {
    "--value"?: string;
    "--size"?: string;
    "--thickness"?: string;
    "--progress-line-color"?: string;
  }
}

const WaterProgress = () => {
  const radialSize = "110px";
  const radialThickness = "2px";

  // Initialize progressValue state and set it to 0 initially
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    // Create a timer to increment progressValue every 1000ms (1 second)
    const timer = setInterval(() => {
      // Increase progressValue by 1 (adjust the increment as needed)
      setProgressValue((prevValue) =>
        prevValue < 100 ? prevValue + 1 : prevValue
      );
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Calculate borderOffset based on progressValue
  const borderOffset = (progressValue / 100) * 360; // Adjust as needed
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
    <div className="flex h-screen items-center justify-center">
      <div
        className={`wpBase  
        flex h-[130px] w-[130px]   
        items-center justify-center rounded-full bg-white ${animationDurationClass}`}
        style={{
          "--size": radialSize,
          "--thickness": radialThickness,
          "--progress-line-color": style["--progress-line-color"],
        }}
      >
        <div className="z-2 absolute inset-0 flex items-center justify-center">
          <WaterWave2
            prevValue={prevValue}
            animationDurationClass={animationDurationClass}
          />
        </div>
        <div className="radial-progress text-accentd font-bold" style={style}>
          {progressValue}%
        </div>
      </div>
    </div>
  );
};

export default WaterProgress;























// import React, { useState, useEffect } from "react";


// import WaterWave2 from "~/pages/components/elenasComponents/WaterWave2";
// interface WaterWave2Props {
//   prevValue: number;
// }
// declare module "react" {
//   interface CSSProperties {
//     "--value"?: string;
//     "--size"?: string;
//     "--thickness"?: string;
//     "--progress-line-color"?: string;
//   }
// }
// const WaterProgress = () => {
//   const radialSize = "110px";
//   const radialThickness = "2px";
// //   const borderColor = "#B9CCC8";

//   // Initialize progressValue state and set it to 0 initially
//   const [progressValue, setProgressValue] = useState(0);

//   useEffect(() => {
//     // Create a timer to increment progressValue every 1000ms (1 second)
//     const timer = setInterval(() => {
//       // Increase progressValue by 1 (adjust the increment as needed)
//       setProgressValue((prevValue) =>
//         prevValue < 100 ? prevValue + 1 : prevValue
//       );
//     }, 1000);

//     // Clear the timer when the component unmounts
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   // Calculate borderOffset based on progressValue
//   const borderOffset = (progressValue / 100) * 360; // Adjust as needed
//   const style = { 
//     "--value": progressValue , 
//   "--size": radialSize,
//   "--thickness": radialThickness,
//   "--progress-line-color": "#FF5733", 
//  } as unknown as React.CSSProperties;
//  const calculateAnimationDuration = (prevValue: number) => {
//   if (prevValue < 25) {
//     return "wave1-5s"; // Choose an appropriate duration based on prevValue
//   } else if (prevValue < 50) {
//     return "wave1-10s";
//   } else {
//     return "wave1-15s";
//   }
// };

// const prevValue = Math.max(progressValue - 1, 0);// Calculate prevValue based on your logic

// const animationDurationClass = calculateAnimationDuration(prevValue);


//   return (
//     <div className="flex h-screen items-center justify-center">
//         <div
//         className={`wpBase  
//         flex h-[130px] w-[130px]   
//         items-center justify-center rounded-full bg-white ${animationDurationClass}`}
//         style={{
//           "--size": radialSize,
//           "--thickness": radialThickness,
//           "--progress-line-color": style["--progress-line-color"],
//         }}
//       >
//         <div className="z-2 absolute inset-0 flex items-center justify-center">
//           <WaterWave2 
//           prevValue={prevValue} 
//           animationDurationClass={animationDurationClass} />
//         </div>

//         <div className="radial-progress text-accentd font-bold" style={style}>
//           {progressValue}%
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WaterProgress;


