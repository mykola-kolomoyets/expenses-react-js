import React from "react";

import "./chart-bar.styles.css";

const ChartBar = (props) => {
  const { value, maxValue, label } = props;

  let barHeight = "0%";

  if (maxValue) {
    barHeight = `${Math.round(((value * 1.0) / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
export { ChartBar };
