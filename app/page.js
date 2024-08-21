"use client";

import Budget from "../components/budget/Budget";
import Income from "../components/income/Income";
import ExpenseList from "../components/reports/ExpenseList";
import Report from "../components/reports/Report";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Personal Finance Dashboard
        </h1>
        <p className="text-lg text-gray-500">
          Track your expenses, income, and budget in one place
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Budget</h2>
          <Budget />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Income</h2>
          <Income />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Expenses</h2>
          <ExpenseList />
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports</h2>
          <Report />
        </div>
      </section>
    </div>
  );
}
