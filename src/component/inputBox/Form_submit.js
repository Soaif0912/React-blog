import { useState } from "react";

function Form_submit(){
const [Name,setName]=useState();
  const [Gender,setGender]=useState();
  const [Check,setCheck]=useState();

  const formSubmit=(e)=>{
    console.log(Name,Gender,Check);
    e.preventDefault();
  }

  return(
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder='Enter yout name.' onChange={(e)=>setName(e.target.value)}/> <br/><br/>
        <select onChange={(e)=>setGender(e.target.value)}>
          <option>Select gender</option>
          <option>Male</option>
          <option>Female</option>
        </select> 
        <input type='checkbox' onChange={(e)=>setCheck(e.target.checked)}/> <br/><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Form_submit;