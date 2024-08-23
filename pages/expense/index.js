import ExpenseForm from "@/components/forms/ExpenseForm";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/expenses");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const initialExpenses = await res.json();

    return { props: { initialExpenses } };
  } catch (error) {
    console.error("Failed to fetch expenses:", error);
    return { props: { initialExpenses: [] } };
  }
}

export default function ExpensePage({ initialExpenses }) {
  const [expenses, setExpenses] = useState(initialExpenses);

  const saveExpense = async (newExpense) => {
    try {
      const res = await fetch("/api/expenses/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      if (!res.ok) {
        throw new Error("Failed to save expense");
      }

      const savedExpense = await res.json();

      setExpenses((prevExpenses) => [...prevExpenses, savedExpense]);
    } catch (error) {
      console.error("Error saving expense:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Expenses</h1>
        <p className="text-lg text-gray-500">
          Track your expenses and see where your money is going.
        </p>
      </header>

      <ExpenseForm onSaveExpense={saveExpense} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expenses.length === 0 ? (
          <div className="text-center text-gray-600 col-span-full">
            <p>No expenses recorded yet. Start tracking your spending today!</p>
          </div>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {expense.description}
              </h3>
              <p className="text-gray-500 mb-4">Date: {expense.date}</p>
              <p className="text-gray-900 text-lg font-semibold">
                N{expense.amount.toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
