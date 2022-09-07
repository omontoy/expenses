import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {

   const [newTitle, setNewTitle] = useState(title)

  const clickHandler = () => {
    setNewTitle('Title Updated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card> 
  );
}

export default ExpenseItem;
