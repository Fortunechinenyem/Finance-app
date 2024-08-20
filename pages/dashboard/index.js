import SummaryCard from "../../components/dashboard/SummaryCard";
import { FaMoneyBillWave, FaWallet, FaPiggyBank } from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="summary-cards">
        <SummaryCard
          title="Total Expenses"
          amount={1200.5}
          icon={<FaMoneyBillWave />}
        />
        <SummaryCard title="Total Income" amount={3000.0} icon={<FaWallet />} />
        <SummaryCard
          title="Budget Status"
          amount={500.0}
          icon={<FaPiggyBank />}
        />
      </div>
    </div>
  );
}
