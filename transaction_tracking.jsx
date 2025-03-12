import { useState } from "react";
import axios from "axios";

const TransactionForm = ({ transaction = {}, onSave }) => {
  const [amount, setAmount] = useState(transaction.amount || "");
  const [description, setDescription] = useState(transaction.description || "");
  const [date, setDate] = useState(transaction.date || "");

  const handleSave = async () => {
    // Form validation
    if (!amount || !description || !date) {
      alert("Please fill in all fields");
      return;
    }

    const transactionData = { amount, description, date };

    if (transaction._id) {
      // Edit transaction
      await axios.put(`/api/transactions/${transaction._id}`, transactionData);
    } else {
      // Add new transaction
      await axios.post("/api/transactions", transactionData);
    }

    onSave();
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <button onClick={handleSave}>Save Transaction</button>
    </div>
  );
};
