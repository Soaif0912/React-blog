import React,{useRef} from "react";

function UseRef(){

    const inputRef=useRef(null);

    function updateRef(){
        console.log('Function Call');
        // inputRef.current.value='100';
        // inputRef.current.focus();
        inputRef.current.style.color='red';

    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={updateRef}>Click</button>

        </div>
    )
}
export default UseRef;