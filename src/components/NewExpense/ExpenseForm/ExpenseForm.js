
import React, { useState } from 'react';

import './ExpenseForm.css'; 

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate:'',
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        
        setUserInput({
            ...userInput, // copies previous key value pairs
            enteredTitle: event.target.value,
        });
    }
    
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput, // copies previous key value pairs
        //     enteredAmount: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput, // copies previous key value pairs
            enteredDate: event.target.value,
        });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler}type='text'/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}  

export default ExpenseForm;
