const categories = ["Food", "Entertainment", "Transport", "Bills", "Other"];

const TransactionFormWithCategory = ({ transaction = {}, onSave }) => {
  const [category, setCategory] = useState(transaction.category || "Food");

  const handleSave = async () => {
    const transactionData = { amount, description, date, category };
    // Save transaction logic
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={handleSave}>Save Transaction</button>
    </div>
  );
};
