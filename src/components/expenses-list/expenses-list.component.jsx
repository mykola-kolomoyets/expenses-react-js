import { Card } from "../card";
import { ExpenseItem } from "../expense-item";

import "./expenses-list.styles.css";

const ExpensesList = (props) => {
  const { expenses } = props;

  const listItems = expenses.map(({ title, amount, date, id }, index) => {
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

  return <Card className="expenses">{listItems}</Card>;
};

export { ExpensesList };
