# 💰 Finance Dashboard UI

A clean and responsive Finance Dashboard built using **React** and **Tailwind CSS (v4)**.  
This project demonstrates frontend development skills including UI design, state management, data visualization, and responsive layouts.

---

## 🚀 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 📌 Features

### 📊 Dashboard Overview
- Total Balance, Income, and Expenses summary cards
- Balance trend visualization (Line Chart)
- Spending breakdown by category (Pie Chart)

### 💳 Transactions
- List of transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
- Search by category
- Filter by transaction type
- Admin can add transactions (role-based UI)

### 🔐 Role-Based UI
- Viewer → Can only view data
- Admin → Can add transactions

### 💡 Insights Section
- Highest spending category
- Total expenses
- Smart financial observation

### 🌙 Dark Mode
- Fully functional dark/light theme
- Theme persists using localStorage

### 📱 Responsive Design
- Mobile-friendly layout
- Collapsible sidebar for small screens
- Smooth transitions and animations

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **State Management:** Context API
- **Icons:** Lucide React

---

## 📁 Project Structure

-src/
│
├── components/
│ ├── Sidebar.jsx
│ ├── SummaryCard.jsx
│ └── Charts/
│ ├── LineChart.jsx
│ └── PieChart.jsx
│
├── context/
│ └── AppContext.jsx
│
├── pages/
│ ├── Dashboard.jsx
│ ├── Transactions.jsx
│ └── Insights.jsx
│
├── App.jsx
└── index.css
