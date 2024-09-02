import React,{useState} from 'react';

function Func_as_prop(prop){

    return(
        <div>
            <button onClick={prop.name}> Clcik</button>
        </div>
    )
}
export default Func_as_prop;