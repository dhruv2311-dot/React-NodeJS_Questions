import React, {useState} from 'react'
const Q1 = () => {
 const [count,setcount]=useState(0);
const handleIncrement = () => setcount(count+1);
const handleDecrement = () => setcount(count-1);
const handleReset = () => setcount(0);
  return (
    <>
    <h2>Counter:{count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Q1
