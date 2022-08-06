import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import "./Expenses.css";
import React, { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('selectedYear', selectedYear);
  };

  const filteredExpenses = props.expensesData.filter( (expense) => {
    return expense.date.getFullYear().toString() === filteredYear; // filter returns a new array containing the elements that return true for this condition
  })

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesChart expenses={filteredExpenses} />
        
        <ExpensesList items={filteredExpenses} />
      
      </Card>
    </div>
  );
}

export default Expenses;
