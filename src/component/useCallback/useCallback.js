import { useCallback, useEffect, useState } from "react";
import Todo from './memo.js';
const UseCallback =()=>{

    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);

    const addTodo= useCallback( ()=>{
        setTodo( (t)=>[...t, 'New Item'] );
    },[todo]);

    useEffect(()=>{
        console.log('UseCallback component update');
    });

    return(
        <>
        <Todo todo={todo} addTodo={addTodo} />
        <br></br>
        <h3>{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Increment + </button>
        </>
    );
}

export default UseCallback;