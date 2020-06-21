  
import React from 'react';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/incomeExpense';
import { TransactionList } from './components/transList';
import { AddTransaction } from './components/addTrans';

import {TransactionProvider} from './context/transContext';


import './App.css';

function App() {
  return (
    <TransactionProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;