import { ExpenseItem } from "../expense-item";

import "./expenses-list.styles.css";

const ExpensesList = (props) => {
  const { expenses, filteredYear } = props;

  const filteredExpenses = expenses.filter((el) => {
    if (filteredYear === "all") return el;
    if (filteredYear != null) return el.date.getFullYear() === +filteredYear;
  });

  if (!filteredExpenses.length) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  const listItems = filteredExpenses.map(({ title, amount, date, id }) => {
    return (
      <ExpenseItem
        id={id}
        key={id}
        // key={`${title}-${index}`}
        title={title}
        amount={amount}
        date={date}
      />
    );
  });

  return <ul className="expenses-list">{listItems}</ul>;
};

export { ExpensesList };
