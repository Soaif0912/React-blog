import { useState } from "react";

function Tenry_condition(){

    const [Value,setValue]=useState(1);
    function UpDateValue(){
        if(Value==3){
            setValue(1);
        }else{
            setValue(Value+1);
        }
    }
    return(
        <div>
            {Value==1?(<h3>Good Morning</h3>
            ):Value==2?(<h3>Good Evening</h3>)
             :(<h3>Good Night</h3>)}
             <button onClick={UpDateValue}>Update</button>
        </div>
    )
}
export default Tenry_condition;


