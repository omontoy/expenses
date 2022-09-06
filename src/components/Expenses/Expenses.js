import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const expenses = items.map(({ id, title, amount, date }) => (
    <ExpenseItem
      key={id}
      title={title}
      amount={amount}
      date={date}
    />
  ))

  return (
    <Card className="expenses">
      {expenses}
    </Card>
  );
};

export default Expenses;