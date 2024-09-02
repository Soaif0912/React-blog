import React,{useState} from 'react';

function Login_form(){

    const [UserId,setUserId]=useState('');
    const [Password,setPassword]=useState('');
    const [ValidId,setValidId]=useState(false);
    const [ValidPass,setValidPass]=useState(false);

    function FormSubmit(e){
        e.preventDefault();
        if(UserId.length < 3 || Password.length < 3){
            alert("Enter valid input")
        }else{
            alert('UserID :'+UserId+'. Pass '+Password)
        }
    }

    function UserValidation(e){
        let Id =e.target.value;
        if(Id.length < 3){
            setValidId(true);
        }else{
            setValidId(false);
        }
        setUserId(Id);
    }

    function PassValidation(e){
        const Pass =e.target.value;
        if(Pass.length < 3){
            setValidPass(true);
        }else{
            setValidPass(false);
        }
        setPassword(Pass);
    }

    return(
        <div>
            <form onSubmit={FormSubmit}>
            <input type="text" placeholder='Enter User ID' onChange={UserValidation} /> {ValidId? <span>Enter Valid UserId</span>:''} <br/><br/>
            <input type='text' placeholder='Enter Password' onChange={PassValidation} /> {ValidPass? <span>Enter Valid password</span>:''} <br/> <br/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Login_form;