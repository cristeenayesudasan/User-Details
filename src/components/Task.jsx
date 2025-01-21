import { Button } from '@mui/material';
import React, { useState } from 'react'

const Task = () => {
    const [count, setCount] = useState(0); 
    const countIncrement = () => {
        setCount(count + 1);
    };
    const countDecrement = () => {
        setCount(count - 1);
    };
    const countReset = () => {
        setCount(0);
    };
  return (
    <>
        <h1>Daily Task</h1>
            <Button variant="contained" onClick={countIncrement}>Count Increment</Button><br /><br />
            <Button variant="contained" onClick={countDecrement}>Count Decrement</Button><br /><br />
            <Button variant="contained" onClick={countReset}>Count Reset</Button><br /><br />
            <small>Count: {count}</small>
            
    </>
  )
}

export default Task