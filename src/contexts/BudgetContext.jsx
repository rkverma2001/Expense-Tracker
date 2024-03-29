import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets }}>
      {children}
    </BudgetContext.Provider>
  );
};
