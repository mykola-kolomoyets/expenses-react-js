import React, { useState } from "react";

import { Input } from "../input";

import "./add-expense-form.styles.css";

const AddExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="new-expense">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit({ title, amount, date });
        }}
      >
        <div className="new-expense__controls">
          <Input
            label="Title"
            value={title}
            type="text"
            onChange={handleTitleChange}
          />
          <Input
            label="Amount"
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
          <Input
            label="Date"
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export { AddExpenseForm };
