import { memo, useEffect } from "react";

const Todo =({todo, addTodo})=>{

    useEffect(()=>{
        console.log('Todo component update');
    });

    return(
        <>
        {todo.map((item, index)=>{
            return(
                <p key={index}> {item}</p>
            )
        })}
        <button onClick={addTodo}>Add Item</button>
        </>
    );
}

export default memo(Todo);