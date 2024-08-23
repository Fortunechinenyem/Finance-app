"use client";
import { useContext, useState } from "react";
import IncomeContext from "@/context/IncomeContext";

export default function IncomesPage() {
  const { income, setIncome } = useContext(IncomeContext);
  const [newIncome, setNewIncome] = useState({ description: "", amount: 0 });

  const handleAddIncome = () => {
    if (!newIncome.description || !newIncome.amount) {
      alert("Please enter a valid description and amount.");
      return;
    }
    setIncome([...income, newIncome]);
    setNewIncome({ description: "", amount: 0 });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Incomes</h1>
        <p className="text-lg text-gray-500">
          Keep track of all your income sources in one place.
        </p>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Your Income
        </h2>
        <ul className="space-y-4">
          {income.length === 0 ? (
            <li className="text-gray-600">No income recorded yet.</li>
          ) : (
            income.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700">{item.description}</span>
                <span className="text-green-600 font-bold">
                  {" "}
                  ₦{item.amount.toLocaleString()}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Add Income
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={newIncome.description}
            placeholder="Income Description"
            onChange={(e) =>
              setNewIncome({ ...newIncome, description: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="number"
            value={newIncome.amount}
            placeholder="Income Amount"
            onChange={(e) =>
              setNewIncome({ ...newIncome, amount: Number(e.target.value) })
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleAddIncome}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Add Income
          </button>
        </div>
      </div>
    </div>
  );
}
