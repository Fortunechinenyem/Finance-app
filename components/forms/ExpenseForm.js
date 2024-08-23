import { useState } from "react";

export default function ExpenseForm({ onSaveExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (Optional)
    if (!description || !amount || !date) {
      alert("All fields are required.");
      return;
    }

    // Expense Object
    const newExpense = {
      description,
      amount: parseFloat(amount),
      date,
    };

    // Call the function to save the expense (this will be passed as a prop)
    onSaveExpense(newExpense);

    // Reset the form fields
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mb-6"
    >
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description
        </label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700">
          Date
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Add Expense
      </button>
    </form>
  );
}
