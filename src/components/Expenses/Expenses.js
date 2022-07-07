import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import "./Expenses.css";
import React, { useState } from 'react';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('selectedYear', selectedYear);
  };

  const filteredExpenses = props.expensesData.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear; // filter returns a new array containing the elements that return true for this condition
  })

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(
      (expense) => {
        return <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
    });
  } 
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
