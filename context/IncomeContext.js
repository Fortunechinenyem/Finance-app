"use client";
import { createContext, useState } from "react";

const IncomeContext = createContext();

export function IncomeProvider({ children }) {
  const [income, setIncome] = useState([]);

  return (
    <IncomeContext.Provider value={{ income, setIncome }}>
      {children}
    </IncomeContext.Provider>
  );
}

export default IncomeContext;
