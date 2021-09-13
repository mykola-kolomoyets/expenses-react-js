import React from "react";

import "./expenses-filter.styles.css";

const ExpensesFilter = (props) => {
  const { onFilterChange } = props;
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option default value="all">
            All
          </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export { ExpensesFilter };
