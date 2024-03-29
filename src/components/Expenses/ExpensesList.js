import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {

    if (!props.items.length) {
        return <h2 className="expenses-liist__fallback">No expenses found</h2>
    } else {
        return (
            <ul className="expenses-list">
                {props.items.map((expense) => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))}
            </ul>
        );
    }
}   

export default ExpensesList;