import React,{ useReducer,} from 'react';
import { reducer } from './reducer';

const initialState = 0;


function UseReducer(){
    const [state,despatch] = useReducer(reducer,initialState);

    return(
        <>
        <h1>{state}</h1>
        <h3> UseReducer</h3>
        <button onClick={()=>despatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>despatch({type:"DECREMENT"})}>Decrement</button>
        </>

    );
}
export default UseReducer;





