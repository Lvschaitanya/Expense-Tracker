import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {

    transactions : []
    // const [transactions, setTransactions] = useState([])
    

}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const [initialTransactions, setInitialTransactions] = useState([])

    const fetchTransactions = async() =>{
        const res = await fetch('http://localhost:5000/transactions')
    
        const data = await res.json()
        return data
        // console.log(data)
    }


    useEffect(()=>{
        const getTransactions = async ()=>{
            const trans = await fetchTransactions()
            // setInitialTransactions([...trans, state.transactions])
            initi(trans)
            // trans.forEach(value =>{
            //     // console.log(value)
            //     addTransaction(value)
            // })
        }

        getTransactions()

        // fetch('http://localhost:5000/transactions')
        // .then(res => res.json())
        // .then(data => {
        //     // data.forEach(trans => addTransaction(trans))
        //     // data.forEach(value => console.log(value))
        //     // dispatch({
        //     //     type:"INITIALIZE",
        //     //     payload:{
        //     //         ...initialState,
        //     //         transactions: data?.data
        //     //     }
        //     // })
        //     // console.log(data)
        //     dispatch({
        //         type:'INITIALIZE',
        //         payload: data
        //     })
        // })

    },[])

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function initi(transaction) {
        dispatch({
            type: 'INIT',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{    transactions: state.transactions,
            deleteTransaction,
            addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}