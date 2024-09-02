import React,{Component, useEffect} from 'react';

function UseEffect_prop(prop){

    useEffect(()=>{
        console.log('Num got called');
    },[prop.num])

    useEffect(()=>{
        console.log('count got called');
    },[prop.count])

    return(
        <div>
            <h4> Number {prop.num}</h4>
            <h4>Counter {prop.count}</h4>
        </div>
    )
}
export default UseEffect_prop;