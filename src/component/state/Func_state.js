import {useState} from 'react';

// --------------- Func_state_string ----------------->
// function Func_state_string(){

//     const [Name,UpdateName]=useState("SOAIF");
//     function UpdateState(){
//         UpdateName("ASIF");
//     }
   
//     return(
//         <div>
//             <h2>Using function State</h2>
//             <h4>{Name}</h4>
//             {/* <button onClick={()=>UpdateName("ASIF")}>Update</button> */}
//             <button onClick={UpdateState}>UPDATE</button>
//         </div>
//     )
// }
// export default Func_state_string;


// --------------- Func_state_number ----------------->
function Func_state_number(){

    const [Age,UpdateAge]=useState(0);
    function UpdateState(){
        UpdateAge(Age+1);
    }
    return(
        <div>
            <h2>Using function State</h2>
            <h4>{Age}</h4>
            {/* <button onClick={()=>UpdateName("ASIF")}>Update</button> */}
            <button onClick={UpdateState}>UPDATE</button>
        </div>
    )
}
export default Func_state_number;