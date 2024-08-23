"use client";

import Link from "next/link";
import Budget from "../components/budget/Budget";
import Income from "../components/income/Income";
import ExpenseList from "../components/reports/ExpenseList";
import Report from "../components/reports/Report";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Personal Finance Dashboard
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Stay on top of your finances by tracking your expenses, income, and
          budget in one place.
        </p>
        <Link href="/budget">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition">
            Get Started
          </button>
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Budget</h2>
          <Budget />
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Income</h2>
          <Income />
        </div>

        <div className="p-6 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
          <ExpenseList />
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Reports</h2>
          <Report />
        </div>
      </section>
    </div>
  );
}
