import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {

  const {transactions} = useContext(GlobalContext)

  let income =0
  let expenses = 0

  const amounts = transactions.map(transaction => transaction.amount)

  amounts
  .filter(item => item>0)
  .forEach(amount => income+=amount)

  amounts
  .filter(item => item<0)
  .forEach(amount => expenses+=Math.abs(amount))
  
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id='money-plus' className='money-plus'>{income}</p>
        </div>
        <div>
            <h4>Income</h4>
            <p id='money-minus' className='money-minus'>{expenses}</p>
        </div>
    </div>
  )
}

export default IncomeExpense