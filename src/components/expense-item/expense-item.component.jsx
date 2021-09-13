import React, { useState, useEffect } from "react";

import { ExpenseDate } from "../expense-date";
import { Card } from "../card";

import "./expense-item.styles.css";

const ExpenseItem = (props) => {
  const { title, amount, date, id } = props;

  const [day, month, year] = date
    .toLocaleDateString("default", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    })
    .split(" ");

  return (
    <Card className="expense-item">
      <ExpenseDate month={month} year={year} day={day} />
      <div className="expense-item__description">
        <h2>
          {title}-{id}
        </h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export { ExpenseItem };
