"use client";
import { useContext, useState } from "react";
import BudgetContext from "@/context/BudgetContext";

export default function BudgetsPage() {
  const { budget, setBudget } = useContext(BudgetContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleUpdateBudget = () => {
    if (newBudget <= 0) {
      alert("Please enter a valid budget amount.");
      return;
    }
    setBudget(newBudget);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Manage Your Budget
        </h1>
        <p className="text-lg text-gray-500">
          Plan your finances and stay within your limits.
        </p>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Current Budget
        </h2>
        <p className="text-3xl font-bold text-green-600 mb-4">
          ₦{budget.toLocaleString()}
        </p>

        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Update Your Budget
        </h3>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            placeholder="Enter new budget"
          />
          <button
            onClick={handleUpdateBudget}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Update Budget
          </button>
        </div>
      </div>
    </div>
  );
}
