import React,{useState,useMemo} from 'react';
function Use_memo(){

    const [Counter,setCounter]=useState(0);
    const [Number,setNumber]=useState(10);

    const updateCountMemo= useMemo(function updateCount(){
        console.log('Counter updates');
    },[Counter])

    const updateNumberMemo= useMemo(function updateNumber(){
        console.log('Number updates');
    },[Number])

    return(
        <div>
            <h2> Counter {Counter}</h2>
            <h2> Number {Number}</h2>
            <button onClick={()=>setCounter(Counter+1)}>Update Count</button>
            <button onClick={()=>setNumber(Number+1)}>Update Number</button>
        </div>
    )
}

export default Use_memo;