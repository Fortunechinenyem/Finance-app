"use client";

import { createContext, useState } from "react";

const BudgetContext = createContext();

export function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(1000);
  console.log("BudgetProvider rendered with budget:", budget);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetContext;
