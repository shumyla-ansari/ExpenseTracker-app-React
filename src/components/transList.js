import React, { useContext } from 'react';
import { Transaction } from './transaction';

import {TransactionContext} from '../context/transContext';

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}