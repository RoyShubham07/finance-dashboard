import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  const totalExpense = expenses.reduce((acc, t) => acc + t.amount, 0);

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  let topCategory = "N/A";
  let max = 0;

  Object.keys(categoryMap).forEach((key) => {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  });

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const message =
    income > totalExpense
      ? "You are saving money 👍"
      : "Expenses are higher than income ⚠️";

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Insights</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 mb-2">
            Top Category
          </h3>
          <p className="text-2xl font-bold text-red-500">{topCategory}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 mb-2">
            Total Expense
          </h3>
          <p className="text-2xl font-bold text-red-500">
            ₹ {totalExpense}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 mb-2">
            Insight
          </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;