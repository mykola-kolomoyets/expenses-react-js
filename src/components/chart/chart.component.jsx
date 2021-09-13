import React from "react";

import { ChartBar } from "./../chart-bar";

import "./chart.styles.css";

const Chart = (props) => {
  const { data } = props;

  const valuesArray = data.map((el) => el.value);
  const maxValue = Math.max(...valuesArray);

  const chartBars = data.map((value, index) => (
    <ChartBar
      key={index}
      value={value.value}
      maxValue={maxValue}
      label={value.label}
    />
  ));
  return <div className="chart">{chartBars}</div>;
};

export { Chart };
