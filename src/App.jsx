import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] =  useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  useEffect (() => {

  })

  const addExpense = () => {
  }

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
    </div>
  )
}

export default App
