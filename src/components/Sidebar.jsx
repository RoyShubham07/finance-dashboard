import { Home, List, BarChart } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menu = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Transactions", icon: <List size={18} /> },
    { name: "Insights", icon: <BarChart size={18} /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-5">
      
      {/* Logo */}
      <h1 className="text-gray-900 dark:text-blue-400 text-xl font-bold mb-8">💰 Finance</h1>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex items-center gap-3 p-3 rounded-lg transition
              ${
                activeTab === item.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;