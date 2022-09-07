import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [ selectedYear, setSelectedYear ] = useState('2020')

  const yearHandler = (year) => {
    setSelectedYear(year)
  }
  
  const expenses = props.items.map(({ id, title, amount, date }) => (
    <ExpenseItem
      key={id}
      title={title}
      amount={amount}
      date={date}
    />
  ))

  // const filteredExpenses = expenses.filter(expense => (
  //   expense.props.date.getFullYear() === selectedYear
  // ))

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter 
        selected={selectedYear} 
        onSelectedYear={yearHandler} 
      />
        {expenses}
      </Card>
    </div>
  );
};

export default Expenses;