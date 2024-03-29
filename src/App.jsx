import React from "react";
import { BudgetProvider } from "./contexts/BudgetContext";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import BudgetForm from "./components/BudgetForm";
import ExpenseTracker from "./components/ExpenseTracker";
import FinancialMonitor from "./components/FinancialMonitor";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="App">
        <BudgetProvider>
          <ExpenseProvider>
            <BudgetForm />
            <ExpenseTracker />
            <FinancialMonitor />
          </ExpenseProvider>
        </BudgetProvider>
      </div>
    </div>
  );
}

export default App;
