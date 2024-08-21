"use client";
import BudgetContext from "@/context/BudgetContext";
import { useContext, useState } from "react";

export default function Budget() {
  const { budget, setBudget } = useContext(BudgetContext);
  const [newBudget, setNewBudget] = useState(budget);
  if (!budget) {
    console.error("Budget context is not available");
    return <div>Error: Budget data is not available</div>;
  }
  const handleUpdateBudget = () => {
    setBudget(newBudget);
  };

  return (
    <div>
      <h2>Budget</h2>
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
