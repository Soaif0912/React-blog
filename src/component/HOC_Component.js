
import React,{useEffect, useState} from 'react';

function HocComponent(){

    return(
        <div>
            <RedComponent cmp={<ChildComponent/>} />
            <BlueComponent cmp={<ChildComponent/>} />
        </div>
    )
}
export default HocComponent;

function RedComponent({cmp}){
    useEffect(()=>{
        console.log('red component is called');
    });

    return(
        <div style={{backgroundColor:'red',height:'100px',width:'150px'}}>
            {cmp}
        </div>
    )
}

function BlueComponent({cmp}){
    useEffect(()=>{
        console.log('Blue component is called');
    });
    return(
        <div style={{backgroundColor:'blue',height:'100px',width:'150px'}}>
            {cmp}
        </div>
    )
}


function ChildComponent(){
    const [Count,setCount]=useState(0);
    return(
        <div>
            <h2>{Count}</h2>
            <button onClick={()=>setCount(Count+1)}>Update</button>
         </div>
    )
}


