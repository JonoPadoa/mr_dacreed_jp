import React, { useState, useEffect } from "react";

const LoadingCircle: React.FC<{ percentage: number }> = ({ percentage }) => {
  const [waveStyle, setWaveStyle] = useState({});

  useEffect(() => {
    const calculateWaveStyles = () => {
      const angle = (percentage / 100) * 360;
      const waveRotation = `rotate(${angle}deg)`;

      setWaveStyle({
        transform: waveRotation,
      });
    };

    calculateWaveStyles();
  }, [percentage]);

  return (
    <div className="relative h-32 w-32">
      <div className="customCircle">
        <div className="customWaveBefore" style={waveStyle}></div>
        <div className="customWaveAfter" style={waveStyle}></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
        {percentage}%
      </div>
    </div>
  );
};

export default LoadingCircle;
