import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyData = [
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)", 
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  
  const [expenses, setExpenses] = useState(dummyData); // dummyData is the initial state, setExpenses is the fn that changes the state 

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => { // when based on previous state, the state changing fn should always receive another fn that gets the last state as parameter automagically by react
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={expenses} />
    </div>
  );
}

export default App;
