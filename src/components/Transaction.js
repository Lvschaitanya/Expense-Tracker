import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)
    console.log(useContext(GlobalContext))
  
    const sign = transaction.amount > 0 ? '+' : '-';

    const removeTransaction = async ()=>{
      await fetch(`http://localhost:5000/transactions/${transaction.id}`,{
        method:'DELETE',
      })
      deleteTransaction(transaction.id)
    }

  return (
    <li className={transaction.amount>0 ?'plus' : 'minus'}>
        {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
        <button onClick={removeTransaction} className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction