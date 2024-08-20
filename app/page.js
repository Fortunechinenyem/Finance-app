"use client";
import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import SummaryCard from "../components/dashboard/SummaryCard";
import { FaMoneyBillWave, FaWallet, FaPiggyBank } from "react-icons/fa";

export default function Home() {
  const { expenses } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = 3000;
  const budgetStatus = 500;

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="summary-cards" style={{ display: "flex", gap: "20px" }}>
        <SummaryCard
          title="Total Expenses"
          amount={totalExpenses}
          icon={<FaMoneyBillWave />}
        />
        <SummaryCard
          title="Total Income"
          amount={totalIncome}
          icon={<FaWallet />}
        />
        <SummaryCard
          title="Budget Status"
          amount={budgetStatus}
          icon={<FaPiggyBank />}
        />
      </div>
    </div>
  );
}
