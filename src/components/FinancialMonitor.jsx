import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
import { ExpenseContext } from "../contexts/ExpenseContext";
import "./FinancialMonitor.css";

const FinancialMonitor = () => {
  const { budgets } = useContext(BudgetContext);
  const { expenses } = useContext(ExpenseContext);

  const totalBudget = budgets.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  const totalExpense = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  const remainingBudget = totalBudget - totalExpense;

  return (
    <div className="financial-monitor">
      <h2>Financial Monitor</h2>
      <div className="summary">
        <p>Total Budget: ₹{totalBudget}</p>
        <p>Total Expense: ₹{totalExpense}</p>
        <p>Remaining Budget: ₹{remainingBudget}</p>
      </div>
    </div>
  );
};

export default FinancialMonitor;
