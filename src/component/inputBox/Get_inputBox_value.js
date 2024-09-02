import {useState} from "react";

function Get_inputBox_value(){

    const [Data,setData]=useState(null);
    const [Print,setPrint]=useState(false);

    var UpdateData=(val)=>{
        setData(val.target.value);
    }

    return(
        <div>
            {Print? <h3>{Data}</h3>: null}
            <input onChange={UpdateData}></input>
            <button onClick={()=>setPrint(true)}>Click</button>
        </div>
    )

}

export default Get_inputBox_value;