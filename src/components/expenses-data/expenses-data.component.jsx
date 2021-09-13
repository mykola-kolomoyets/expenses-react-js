import React, { useState } from "react";

import { ExpensesList } from "./../expenses-list";
import { ExpensesFilter } from "./../expenses-filter";
import { Card } from "./../card";
import { ExpensesChart } from "./../expenses-chart";

const ExpensesData = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState("all");

  const handleFilterChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((el) => {
    if (filteredYear === "all") return el;
    if (filteredYear != null) return el.date.getFullYear() === +filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={handleFilterChange}
        />
        <ExpensesList expenses={filteredExpenses} filteredYear={filteredYear} />
      </Card>
    </>
  );
};

export { ExpensesData };
