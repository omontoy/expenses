// import { useState } from "react";
// import ExpenseForm from "./ExpenseForm";
// import "./NewExpense.css";

// const NewExpense = (props) => {
//   const [clicked, setClicked] = useState(false);

//   const newExpenseHandler = (newExpenseData) => {
//     const expenseData = {
//       id: Math.random().toString(),
//       ...newExpenseData,
//     };

//     props.onCreatedNewExpense(expenseData);
//   };

//   const addExpenseHandler = (e) => {
//     e.preventDefault();

//     setClicked(prevState => !prevState);
//   };

//   return (
//     <div className="new-expense">
//       <div className="new-expense__actions"></div>
//       {clicked ? (
//         <ExpenseForm onSaveNewExpense={newExpenseHandler} />
//       ) : (
//         <button type="button" onClick={addExpenseHandler}>
//           Add Expense
//         </button>
//       )}
//     </div>
//   );
// };

// export default NewExpense;

// --------------------

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
