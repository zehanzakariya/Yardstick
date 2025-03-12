const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction._id}>
          {transaction.date}: {transaction.description} - ${transaction.amount}
        </li>
      ))}
    </ul>
  );
};
