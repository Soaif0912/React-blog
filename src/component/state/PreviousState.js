
import {useState} from 'react';

function PreviousState(){
    const [count,setCount] = useState(0);
    function UpdateState(){
        // setCount((pre)=>{
        //     // console.log(pre);
        //     // return count + 1;

        //     // const rand = Math.floor(Math.random()*10);
        //     // if(pre > 5){ alert('previous state is '+pre) }
        //     // return rand;
        // })
            for(let i=0; i<5; i++){
                setCount((pre)=> pre+1);
            }
        }


    return(
        <div>
            <h2>{count}</h2>
            <button onClick={UpdateState}>Update</button>

        </div>
    )
}
export default PreviousState;