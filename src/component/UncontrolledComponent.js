import React,{useRef} from 'react';

function UncontrlledComponent(){

    const nameRef=useRef(null);

    function FormSubmit(e){
        e.preventDefault();
        console.log(nameRef.current.value);
        const name=document.getElementById('name').value;
        console.log(name);
    }

    return(
        <div>

            <form onSubmit={FormSubmit}>
            <input ref={nameRef} type="text" />
            <input id='name' type="text" />
            <button>Submit</button>
            </form>

        </div>
    )
}

export default UncontrlledComponent;