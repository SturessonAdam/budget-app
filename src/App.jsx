import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  useEffect (() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (category && amount) {
      const newExpense = { category, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setCategory("");
      setAmount("");
    }
  }

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>Hushållsbudget</h2>
      <div>
        <input
          type='text'
          placeholder='Kategori'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type='text'
          placeholder='Summa'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>
          Lägg till utgift
        </button>
      </div>

      <h2>Utgifter</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: {expense.amount} kr
          </li>
        ))}
      </ul>

      <h2>Total: {totalAmount} kr</h2>
    </div>
  )
}

export default App
