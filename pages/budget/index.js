"use client";
import BudgetContext from "@/context/BudgetContext";
import { useContext, useState } from "react";

export default function BudgetsPage() {
  const { budget, setBudget } = useContext(BudgetContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleUpdateBudget = () => {
    setBudget(newBudget);
  };

  return (
    <div>
      <h1>Budgets</h1>
      <p>Current Budget: ${budget}</p>
      <input
        type="number"
        value={newBudget}
        onChange={(e) => setNewBudget(Number(e.target.value))}
      />
      <button onClick={handleUpdateBudget}>Update Budget</button>
    </div>
  );
}
