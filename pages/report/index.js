"use client";
import { useContext } from "react";
import ExpenseContext from "@/context/ExpenseContext";
import IncomeContext from "@/context/IncomeContext";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ReportsPage() {
  const { expenses } = useContext(ExpenseContext);
  const { income } = useContext(IncomeContext);

  const expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const incomeTotal = income.reduce((acc, curr) => acc + curr.amount, 0);
  const netBalance = incomeTotal - expenseTotal;

  const data = [
    { name: "Expenses", value: expenseTotal || 0 },
    { name: "Income", value: incomeTotal || 0 },
  ];

  const COLORS = ["#FF8042", "#0088FE"];

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.text("Financial Report", 20, 10);
    autoTable(doc, {
      startY: 20,
      head: [["Type", "Description", "Amount"]],
      body: [
        ...expenses.map((expense) => [
          "Expense",
          expense.description,
          `₦${expense.amount}`,
        ]),
        ...income.map((item) => [
          "Income",
          item.description,
          `₦${item.amount}`,
        ]),
      ],
    });
    doc.save("Financial_Report.pdf");
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Financial Reports
        </h1>
        <p className="text-lg text-gray-500">
          Get an overview of your income and expenses
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Income</h2>
          <p className="text-2xl text-green-500 font-bold">₦{incomeTotal}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Expenses
          </h2>
          <p className="text-2xl text-red-500 font-bold">₦{expenseTotal}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Net Balance</h2>
          <p
            className={`text-2xl font-bold ${
              netBalance >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ₦{netBalance}
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        {incomeTotal > 0 || expenseTotal > 0 ? (
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        ) : (
          <p className="text-gray-500 text-center">
            No data available for chart
          </p>
        )}
      </div>

      <div className="text-center">
        <button
          onClick={handleDownloadReport}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Download Report as PDF
        </button>
      </div>
    </div>
  );
}
