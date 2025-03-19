import React,{useEffect, useRef, useState} from "react";

// function UseRef(){

//     const inputRef=useRef(null);

//     function updateRef(){
//         console.log('Function Call');
//         // inputRef.current.value='100';
//         // inputRef.current.focus();
//         inputRef.current.style.color='red';

//     }

//     return(
//         <div>
//             <input type="text" ref={inputRef}/>
//             <button onClick={updateRef}>Click</button>

//         </div>
//     )
// }


// function UseRef(){

//     const inputElement = useRef();

//     const focusInput = () => {
//         inputElement.current.focus();
//     };

//     return (
//         <>
//         <input type="text" ref={inputElement} />
//         <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
// }


// Stroing count how many times user changing input value
// function UseRef(){
//     const count = useRef(0);

//     const [inputValue, setInputValue] = useState('');
//     useEffect(()=>{
//         count.current = count.current + 1;
//     });

//     return(
//         <>
//             <h3>Input typing count {count.current}</h3>
//             <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
//         </>
//     );
// }


// Storing previous input value
// function UseRef(){
//     const [inputValue, setInputValue] = useState('');
//     const previousInputValue = useRef('');

//     useEffect(()=>{
//         previousInputValue.current = inputValue;
//     },[inputValue]);

//     return(
//         <>
//         <h3>Previous InputValue = {previousInputValue.current}</h3>
//         <h3>Current Inpuvalue = {inputValue}</h3>
//         <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
//         </>
//     )
// }


function UseRef(){
    

    const [count, setCount] = useState(0);
    const countref = useRef(0);
    const firstrender = useRef(true);

    useEffect(()=>{
        if(firstrender.current){
            firstrender.current = false;
            return;
        }
        countref.current = countref.current + 1;
    },[count]);

    return(
        <>
            <h3>Count {count}</h3>
            <h5>countRef {countref.current}</h5>
            <button onClick={(e)=>{setCount(count+1)}}>Click</button>
        </>
    );
}


export default UseRef;