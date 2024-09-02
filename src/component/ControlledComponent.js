
import React,{useState} from 'react';

function ControlledComponent(){

    const [Name,setName]=useState('Soaif')
    return(
        <div>
            <h2>{Name}</h2>
            <input type='text' value={Name} onChange={(e)=>setName(e.target.value)} />

        </div>
    )
} 

export default ControlledComponent;