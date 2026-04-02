import { createContext, useState } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialData);
  const [role, setRole] = useState("Viewer");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;