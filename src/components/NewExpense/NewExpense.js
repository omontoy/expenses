import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditingForm, setIsEditingForm] = useState(false);

  const startEditingHandler = () => {
    setIsEditingForm(true);
  };

  const stopEditingFormHandler = () => {
    setIsEditingForm(false);
  };

  const newExpenseHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };

    props.onCreatedNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditingForm && (
        <button onClick={startEditingHandler}>Add Expense</button>
      )}

      {isEditingForm && <ExpenseForm onSaveNewExpense={newExpenseHandler} onCancel={stopEditingFormHandler} />}
    </div>
  );
};

export default NewExpense;
