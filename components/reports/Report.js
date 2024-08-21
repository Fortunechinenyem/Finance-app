import ExpenseContext from "@/context/ExpenseContext";
import IncomeContext from "@/context/IncomeContext";
import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Report() {
  const { expenses } = useContext(ExpenseContext);
  const { income } = useContext(IncomeContext);

  const expenseTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const incomeTotal = income.reduce((acc, curr) => acc + curr.amount, 0);

  const data = [
    { name: "Expenses", value: expenseTotal },
    { name: "Income", value: incomeTotal },
  ];

  const COLORS = ["#FF8042", "#0088FE"];

  return (
    <div>
      <h2>Financial Report</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
