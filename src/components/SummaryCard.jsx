const SummaryCard = ({ title, amount, color }) => {
    return (
      <div className="
        p-5 rounded-2xl shadow-md 
        bg-white dark:bg-gray-900 
        border border-gray-200 dark:border-gray-700 
        transition-all duration-300 
        hover:shadow-2xl hover:scale-[1.03]
      ">
        
        <h2 className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {title}
        </h2>
  
        <p className={`text-3xl font-bold ${color}`}>
          ₹ {amount.toLocaleString()}
        </p>
      </div>
    );
  };
  
  export default SummaryCard;