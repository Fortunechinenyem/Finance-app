"use client";
import IncomeContext from "@/context/IncomeContext";
import { useContext, useState } from "react";

export default function IncomesPage() {
  const { income, setIncome } = useContext(IncomeContext);
  const [newIncome, setNewIncome] = useState({ description: "", amount: 0 });

  const handleAddIncome = () => {
    setIncome([...income, newIncome]);
    setNewIncome({ description: "", amount: 0 });
  };

  return (
    <div>
      <h1>Incomes</h1>
      <ul>
        {income.map((item, index) => (
          <li key={index}>
            {item.description} - ${item.amount}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newIncome.description}
        placeholder="Description"
        onChange={(e) =>
          setNewIncome({ ...newIncome, description: e.target.value })
        }
      />
      <input
        type="number"
        value={newIncome.amount}
        placeholder="Amount"
        onChange={(e) =>
          setNewIncome({ ...newIncome, amount: Number(e.target.value) })
        }
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
}
