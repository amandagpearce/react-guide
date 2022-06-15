import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expensesData[0].title}
        amount={props.expensesData[0].amount}
        date={props.expensesData[0].date}
      />
    </div>
  );
}

export default Expenses;
