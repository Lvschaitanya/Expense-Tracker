import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext)


    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const submit =async (e) =>{
        e.preventDefault()
        if(!text){
            alert('Enter the details')
        }else if(amount ===0){
            alert('Enter the amount')
        }
        else{
            const newTransaction = {
                id: Math.floor(Math.random()*1000),
                text,
                amount: +amount
            }

            await fetch(`http://localhost:5000/transactions`,{
                method:'POST',
                headers: {
                    'content-type':'application/json',
                },
                body:JSON.stringify(newTransaction),
            })

            addTransaction(newTransaction)
            setText('')
            setAmount(0)
        }
    }

  return (
    <>
        <h3>Add Transaction</h3>
        <form onSubmit={submit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type="text" value={text} placeholder='Enter text' onChange={(e)=>setText(e.target.value)}  />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type='number' value={amount} placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)} />
                <button className='btn'>Add Transaction</button>

            </div>
        </form>
    </>
  )
}

export default AddTransaction