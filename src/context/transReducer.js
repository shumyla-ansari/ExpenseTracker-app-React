
const TransactionReducer = ((state, action)=>{

    switch(action.type){

        case "DEL_TRANSACTION":
            return {
        
                 transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        
        case 'ADD_TRANSACTION':
            return {
              ...state,
              transactions: [action.payload, ...state.transactions]
            }
            
        default:
            return state;
        
    }
})

export default TransactionReducer;