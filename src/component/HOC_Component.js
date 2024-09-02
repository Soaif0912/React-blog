
import React,{useState} from 'react';

function HocComponent(){

    return(
        <div>
            <RedComponent cmp={ChildComponent} />
            <BlueComponent cmp={ChildComponent} />
        </div>
    )
}
export default HocComponent;

function RedComponent(prop){
    return(
        <div style={{backgroundColor:'red',height:'100px',width:'150px'}}>
            <prop.cmp/>
        </div>
    )
}

function BlueComponent(prop){
    return(
        <div style={{backgroundColor:'blue',height:'100px',width:'150px'}}>
            <prop.cmp/>
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


