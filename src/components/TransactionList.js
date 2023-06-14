import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTransaction } from '../redux/transactionSlice';

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const handleRemove = (transactionId) => {
    dispatch(removeTransaction(transactionId));
  };

  return (
    <div>
      <h2>Transactions</h2>
      {transactions && transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - {transaction.amount}
              <button onClick={() => handleRemove(transaction.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions available</p>
      )}
    </div>
  );
};

export default TransactionList;
