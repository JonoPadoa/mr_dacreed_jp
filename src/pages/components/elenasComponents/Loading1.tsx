import React, { useEffect, useState } from "react";
import styles from "~/styles/loading1.module.css";

const Loading1 = () => {
  //   const [percent, setPercent] = useState(0);

  //   const handleInterval = () => {
  //     if (percent < 100) {
  //       setPercent((prevPercent) => prevPercent + 1);
  //     }
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(handleInterval, 60);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [percent]);

  return (
    <div>Loading Place Holder</div>
    //     <div>
    //       <div className={styles.box}>
    //         <div className={styles.percent}>
    //           <div className={styles.percentNum} id="count">
    //             {percent}
    //           </div>
    //           <div className={styles.percentB}>%</div>
    //         </div>
    //         <div id="water" className={styles.water}>
    //           <svg
    //             viewBox="0 0 560 20"
    //             className={`${styles.water_wave ?? ""} ${
    //               styles.water_wave_back ?? ""
    //             }`}
    //           >
    //             <use xlinkHref="#wave"></use>
    //           </svg>
    //           <svg
    //             viewBox="0 0 560 20"
    //             className={`${styles.water_wave ?? ""} ${
    //               styles.water_wave_front ?? ""
    //             }`}
    //           >
    //             <use xlinkHref="#wave"></use>
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };
  );
};
export default Loading1;
