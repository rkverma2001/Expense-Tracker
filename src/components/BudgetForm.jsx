import { useContext, useState } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
import "./BudgetForm.css";

const BudgetForm = () => {
  const { budgets, setBudgets } = useContext(BudgetContext);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudgets([...budgets, { category, amount }]);
    setCategory("");
    setAmount("");
  };

  return (
    <div className="budget-form">
      <h2>Set Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
};

export default BudgetForm;
