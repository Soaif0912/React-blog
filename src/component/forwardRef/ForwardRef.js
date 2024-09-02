import React,{useRef} from 'react';
import UserRef from "./UserRef"

function ForwardRef(){

    const inputRef=UserRef(null);

    function UpdateRef(){
        inputRef.current.value='100';
    }

    return(
        <div>
            <UserRef ref={inputRef}/>
            <button onClick={UpdateRef} >Click</button>
        </div>
    )
}
export default ForwardRef;