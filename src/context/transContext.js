import React, { createContext, useReducer } from 'react'
import TransactionReducer from './transReducer'

const initialTransactions = {
    transactions: []
}

export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider = ({children}) =>{
    let [state, dispatch] =useReducer(TransactionReducer, initialTransactions)

    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
            
        }}>
            {children}

        </TransactionContext.Provider>
    )
}












// import React, { createContext, useReducer } from 'react'
// import TransactionReducer from './transReducer'

// const initialTransactions = [
//     {amount: 700, desc: "Cash"},
//     {amount: -40, desc: "Book"},
//     {amount: 200, desc: "Camera"},
//     {amount: -400, desc: "Bill"}

// ]

// export const TransactionContext = createContext(initialTransactions);



// export const TransactionProvider = ({children}) =>{
//     let [state, dispatch] =useReducer(TransactionReducer, initialTransactions)

//     function addTransaction(transaction) {
//         dispatch({
//           type: 'ADD_TRANSACTION',
//           payload: transaction
//         });
//       }

//     function deleteTransaction(id){
//         dispatch({
//             type: 'DEL_TRANSACTION',
//             payload: id
//         })
//     }

//     return (
//         <TransactionContext.Provider value={{
//             transactions: state.transactions,
//             addTransaction,
//             deleteTransaction
            
//         }}>
//             {children}

//         </TransactionContext.Provider>
//     )
// }