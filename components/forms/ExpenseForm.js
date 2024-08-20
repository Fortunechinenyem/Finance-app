import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState({ description: "", amount: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });
    const newExpense = await res.json();
    onAddExpense(newExpense);
    setExpense({ description: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={expense.description}
        onChange={(e) =>
          setExpense({ ...expense, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
