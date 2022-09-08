import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./utils/expensesData";

const App = () => {

  const [ expensesList, setExpensesList ] = useState(expenses)

  const createdExpenseHandler = expenseCreated => {
    // setExpensesList(prevExpenses => (
    //   [ expenseCreated, ...prevExpenses ]
    // ))

    setExpensesList(prevExpenses => {
      return [...prevExpenses, expenseCreated]
    })
  }

  return (
    <div>
      <NewExpense onCreatedNewExpense={createdExpenseHandler}/>
      <Expenses items={expensesList} />
    </div>
  );
};
 
export default App;
