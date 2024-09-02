import { useState } from "react";

function Function_condition(){

    const [Num,UpdateState]=useState(0);

    function UpdateNum(){
        if(Num < 10){
            UpdateState(Num+1);
        }else{
            alert("Can't increse more than 10");
        }

    }
    return(
        <div>
            <h3>{Num}</h3>
            <button onClick={UpdateNum}>UPDATE</button>
        </div>
    )
}

export default Function_condition;