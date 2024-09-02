import React,{useEffect,useState} from 'react';

function UseEffect(){

    const [user,setuser]=useState('soaif');
    const [roll,setroll]=useState(10);

    useEffect(()=>{
        console.log(' USeEffect got called for user')
    },[user]);
    // [user] is condition, This useEffect will get called only after this state render or rerender

    useEffect(()=>{
        console.log(' USeEffect got called for roll')
    },[roll]);

    return(
        <div>
            <h4>{user}</h4>
            <p>{roll}</p>
            <button onClick={()=>setuser('Asif')}>UPDATE NAME</button>
            <button onClick={()=>setroll(11)}>UPDATE ROLL</button>
        </div>
    )
}
export default UseEffect;