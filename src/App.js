import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

const App = () => {
  return (
    <div>
      <h1>Transaction App</h1>
      <TransactionList />
      <TransactionForm />
    </div>
  );
};

export default App;
