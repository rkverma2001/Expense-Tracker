import { useContext, useState } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { category, amount };
    setExpenses([...expenses, newExpense]);
    setCategory("");
    setAmount("");
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
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
      <div className="expenses-list">
        <h3>Expenses:</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.category}: ${expense.amount}
              <button onClick={() => handleRemoveExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
