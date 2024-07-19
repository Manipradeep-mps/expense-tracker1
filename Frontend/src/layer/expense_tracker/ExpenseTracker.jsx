import React, { useEffect, useState } from "react";
import Expenses from "../../components/expenses/Expenses";
import NewExpense from "../../components/new_expense/NewExpense";
import { getAllExpenses } from "../../api";

const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState(DUMMY_DATA);
    const getAllData =async()=>{
      const all_expense_data=await getAllExpenses();
      console.log('all_expense_data',all_expense_data);
      setExpenses(all_expense_data);
    }
    useEffect(()=>{getAllData()},[]);
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 5000)
    // }, [])
    const onAddNewExpense = (new_expense) => {
    setExpenses((previous_expenses) => {
      return [new_expense, ...previous_expenses];
    })
  }
    return (
        <div className="App">
        <NewExpense onAddNewExpense={onAddNewExpense} />
        <Expenses expenses={expenses} isListLoading={false}/>
        </div>
    );
}

export default ExpenseTracker;