import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const {transactions} = useContext(GlobalContext)

  // console.log(transactions)

  let total =0

  transactions.forEach(transaction =>total+=transaction.amount  )


  return (
    <>
        <h4>Balance</h4>
        <h1 id='balance'> {total}</h1>
    </>
  )
}

export default Balance