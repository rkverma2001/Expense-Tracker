import { useContext, useState } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { category, amount }]);
    setCategory("");
    setAmount("");
  };

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
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
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
