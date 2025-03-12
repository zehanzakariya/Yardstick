const Dashboard = ({ transactions }) => {
  const totalExpenses = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const categoryBreakdown = prepareCategoryData(transactions); // Process category-wise data
  const recentTransactions = transactions.slice(0, 5); // Show the 5 most recent transactions

  return (
    <div>
      <div>Total Expenses: ${totalExpenses}</div>
      <CategoryPieChart transactions={transactions} />
      <div>Most Recent Transactions: </div>
      <TransactionList transactions={recentTransactions} />
    </div>
  );
};
