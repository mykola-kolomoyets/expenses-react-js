import React, { useState, useEffect } from "react";

import {
  ExpensesList,
  AddExpenseForm,
  ExpensesFilter,
  Card,
} from "./components";

const App = () => {
  const initialValues = [
    {
      title: "car",
      amount: 123.23,
      date: new Date(2021, 3, 3),
      id: 0,
    },
    {
      title: "car",
      amount: 123.23,
      date: new Date(2020, 5, 11),
      id: 1,
    },
    {
      title: "car",
      amount: 123.23,
      date: new Date(2021, 6, 9),
      id: 2,
    },
    {
      title: "car",
      amount: 123.23,
      date: new Date(2022, 9, 9),
      id: 3,
    },
  ];

  const [expenses, setExpenses] = useState(initialValues);
  const [filteredYear, setFilteredYear] = useState("all");

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

  const handleFilterChange = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <AddExpenseForm onSubmit={handleSubmit} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesList expenses={expenses} filteredYear={filteredYear} />
      </Card>
    </div>
  );
};

export default App;
