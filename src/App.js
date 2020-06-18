import React from 'react';
import Child from './components/Child'
import './App.css';
import {TransactionProvider} from './components/transContext'

function App() {
  return (
    
    <TransactionProvider>
      <Child/>
    </TransactionProvider>
  );
}

export default App;
