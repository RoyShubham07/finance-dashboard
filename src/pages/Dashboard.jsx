import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import CustomLineChart from "../components/Charts/LineChart";
import CustomPieChart from "../components/Charts/PieChart";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Balance" amount={balance} color="text-blue-500" />
        <SummaryCard title="Income" amount={income} color="text-green-500" />
        <SummaryCard title="Expenses" amount={expense} color="text-red-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
            Balance Trend
          </h2>

          {lineData.length === 0 ? (
            <p className="text-center text-gray-500">No data available</p>
          ) : (
            <CustomLineChart data={lineData} />
          )}
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="mb-3 font-semibold text-gray-700 dark:text-gray-200">
            Spending Breakdown
          </h2>

          {pieData.length === 0 ? (
            <p className="text-center text-gray-500">No expense data</p>
          ) : (
            <CustomPieChart data={pieData} />
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;