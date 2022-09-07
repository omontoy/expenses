import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  const newExpenseHandler = newExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData
    }

    props.onCreatedNewExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
