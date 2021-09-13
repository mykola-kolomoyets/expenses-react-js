import React from "react";

import { Chart } from "./../chart";

const ExpensesChart = (props) => {
  const { expenses } = props;

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const initialValues = labels.map((el, index) => {
    return {
      label: labels[index],
      value: 0,
    };
  });

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    initialValues[+month].value += +expense.amount;
  });

  return <Chart data={initialValues} />;
};

export { ExpensesChart };
