
import React, { useState } from 'react';

import './ExpenseForm.css'; 

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // disables automatic submit of form with page reload

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData); // .onSaveExpenseData passed from NewExpense.js 
        
        setEnteredTitle(''); // clearing the fields after sending
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/> 
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountChangeHandler}type='text'/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='cancel' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}  

export default ExpenseForm;
