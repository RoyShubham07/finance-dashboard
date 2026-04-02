import { useContext, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import Sidebar from "./components/Sidebar";

function App() {
  const { role, setRole } = useContext(AppContext);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main */}
      <div className="flex-1 min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition duration-300 p-4 md:p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          
          <div className="flex items-center gap-3">
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </button>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {activeTab}
              </h1>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                Manage your finances efficiently
              </p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3 items-center">
            
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="Viewer">Viewer</option>
              <option value="Admin">Admin</option>
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 md:px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        {/* Pages */}
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Transactions" && <Transactions />}
        {activeTab === "Insights" && <Insights />}
      </div>
    </div>
  );
}

export default App;