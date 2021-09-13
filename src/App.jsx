import React, { useState, useEffect } from "react";

import {
  ExpensesList,
  AddExpenseForm,
  ExpensesFilter,
  Card,
  Chart,
  ExpensesData,
} from "./components";

const App = () => {
  const initialValues = [
    {
      title: "Машина",
      amount: 12123.0,
      date: new Date(2021, 3, 3),
      id: 0,
    },
    {
      title: "PlayStation 5",
      amount: 203.99,
      date: new Date(2020, 5, 11),
      id: 1,
    },
    {
      title: "iPhone XXXXXXXL",
      amount: 1999.99,
      date: new Date(2021, 6, 9),
      id: 2,
    },
    {
      title: "пакетик у АТБ",
      amount: 0.05,
      date: new Date(2022, 9, 9),
      id: 3,
    },
  ];

  const [expenses, setExpenses] = useState(initialValues);

  const handleSubmit = ({ title, amount, date }) => {
    const newExpenseDate = new Date(date);
    setExpenses([
      {
        title,
        amount,
        date: newExpenseDate,
        id: expenses.length,
      },
      ...expenses,
    ]);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <AddExpenseForm onSubmit={handleSubmit} />
      <ExpensesData expenses={expenses} />
    </div>
  );
};

export default App;
