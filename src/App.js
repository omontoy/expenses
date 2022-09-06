import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./utils/expensesData";

const App = () => {
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};
 
export default App;
