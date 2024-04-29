import React from 'react';
import './styles.css'; // Import the CSS file

const Transaction = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <h1>Transactions</h1>
      <div className='transactions'>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className={`transaction-row ${index % 2 === 0 ? 'greyed-row' : ''}`}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  );
};

export default Transaction;
