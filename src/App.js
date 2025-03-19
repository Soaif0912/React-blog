import logo from './logo.svg';

import React,{ PureComponent, useState,Component } from 'react';

import './App.css';
import './style.css';
import style from './custom.module.css';

import Table from 'react-bootstrap/Table';



import Func_component from './component/Func_component.js';
import Class_component  from './component/Class_component.js';
import Func_inside_func from './component/Func_inside_func.js';
import Click_event from './component/event/Click_event.js';

import Func_state_string from './component/state/Func_state.js';
import Func_state_number from './component/state/Func_state.js';
import Class_state from './component/state/Class_state.js';
import PreviousState from './component/state/PreviousState.js';

import ComponentDidMount from './component/ComponentDidMount.js';
import Component_Did_Update from './component/componentDidUpdate.js';
import ShouldComponentUpdate from './component/shouldComponentUpdate.js';
import ComponentWillUnmount from './component/ComponentWillUnmount.js';
import FragmentComp from './component/Fragment.js';
import Pure_component from './component/PureComponent.js';
import Use_memo from './component/useMemo/UseMemo.js';
import UseRef from './component/useRef/UseRef.js';
import ForwardRef from './component/forwardRef/ForwardRef.js';
import ControlledComponent from './component/ControlledComponent.js';
import UncontrlledComponent from './component/UncontrolledComponent.js';
import HocComponent from './component/HOC_Component.js';

import Function_condition from './component/condition/Function_condition.js';
import Class_condition from './component/condition/Class_condition.js';
import Tenry_condition from './component/condition/tenry_condition.js';

import Func_prop from './component/prop/Func_prop.js';
import Class_prop from './component/prop/Class_prop.js';
import Func_as_prop from './component/prop/Function_as_prop.js';
import PreviousProp from './component/prop/PreviousProp.js';

import LiftingState from './component/Lifting state up/1st.js';

import Get_inputBox_value from './component/inputBox/Get_inputBox_value.js';
import Form_submit from './component/inputBox/Form_submit.js';
import Login_form from './component/inputBox/Login_form.js';

import UseEffect from './component/useEffect/UseEffect.js';
import UseEffect_prop from './component/useEffect/useEffect_prop.js'; 
import UseReducer from './component/useReducer/useReducer.js';
import UseCallback from './component/useCallback/useCallback.js';

import Loop_Map from './component/Loop_through/loop_map.js';
import Loop_Object from './component/Loop_through/Loop_object.js';
import Loop_nested from './component/Loop_through/Loop_nested.js';
import Loop_components from './component/Loop_through/Loop_component.js';


// ----------------- Func_component ------------------->
// function App() {
//   return (
//     <div className="App">
//      {/* <h1>Good Moring</h1>
//      <Func_component/> */}
//     </div>
//   );
// }
// export default App;

// ----------------- Class_component ------------------->
// function App() {
//   return (
//     <div className="App">
//      <h1>Good Moring</h1>
//      <Class_component/>
//     </div>
//   );
// }
// export default App;

// ----------------- Func_inside_func ------------------->
// function App() {
//   return (
//     <div className="App">
//      <h1>Good Moring</h1>
//      <Func_inside_func/>
//     </div>
//   );
// }
// export default App;

// ----------------- Click_event ------------------->
// function App() {
//   return (
//     <div className="App">
//      <h1>Good Moring</h1>
//      <Click_event/>
//     </div>
//   );
// }
// export default App;

// ----------------- Func_state_string ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Func_state_string/>
//     </div>
//   );
// }
// export default App;


// ----------------- Func_state_number ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Func_state_number/>
//     </div>
//   );
// }
// export default App;


// ----------------- Class_state ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Class_state/>
//     </div>
//   );
// }
// export default App;


// ----------------- PreviousState ------------------->
// function App() {
//   return (
//     <div className="App">
//      <PreviousState/>
//     </div>
//   );
// }
// export default App;


// ----------------- ComponentDidMount ------------------->
// function App() {
//   return (
//     <div className="App">
//      <ComponentDidMount/>
//     </div>
//   );
// }
// export default App;

// ----------------- Component_Did_Update ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Component_Did_Update />
//     </div>
//   );
// }
// export default App;


// ----------------- Component_Did_Update ------------------->
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       val:true,
//     }
//   }

//   render(){
//     return (
//         <div className="App">
//           {this.state.val? <ComponentWillUnmount />:'' }
//           <button onClick={()=>{this.setState({val:!this.state.val})}}>UPDATE</button>
//         </div>
//       );
//     }
//   }
// export default App;


// ----------------- ShouldComponentUpdate ------------------->
// function App() {
//   return (
//     <div className="App">
//      <ShouldComponentUpdate />
//     </div>
//   );
// }
// export default App;

// ----------------- Fragment ------------------->
// function App() {
//   return (
//     <div className="App">
//      <FragmentComp />
//     </div>
//   );
// }
// export default App;


// ----------------- Pure_component ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Pure_component/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- Use_memo ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Use_memo/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- UseRef ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <UseRef/>
//       </div>
//     )
//   }
// }
// export default App;


// // ----------------- ForwardRef ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <ForwardRef/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- ControlledComponent ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <ControlledComponent/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- UncontrlledComponent ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <UncontrlledComponent/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- HocComponent ------------------->
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <HocComponent/>
//       </div>
//     )
//   }
// }
// export default App;


// ----------------- Function_condition ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Function_condition/>
//     </div>
//   );
// }
// export default App;


// ----------------- Class_condition ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Class_condition/>
//     </div>
//   );
// }
// export default App;


// ----------------- Get_inputBox_value ------------------->
// function App() {
//   return (
//     <div className="App">
//      <Get_inputBox_value/>
//     </div>
//   );
// }
// export default App;



// ----------------- Func_prop ------------------->
// function App() {
//   const [name,setName]=useState('Soaif Ikabal Mondal');

//   return (
//     <div className="App">
//      <h1>Good Moring</h1>
//      <Func_prop Name={name} other={{Address:"Baruipur", Gender:"Male" }}/>
//      <button onClick={()=>setName('Asif Ikbal Mondal')}>Update</button>
//     </div>
//   );
// }
// export default App;

// // ----------------- Class_prop ------------------->
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       MyName:"Soaif Ikbal"
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         <Class_prop Name={this.state.MyName} Email="Soaif@gmail.com"/>
//         <button onClick={()=>this.setState({MyName:"asif"})}>Update</button>
//       </div>
//     )
//   }
// }
// export default App;


// // ----------------- Func_as_prop ------------------->
// function App() {
  
//   function myName(){
//     alert("Hello");
//   }

//   return (
//     <div className="App">
//       <Func_as_prop name={myName}/>
//     </div>
//   );
// }
// export default App;


// ----------------- PreviousProp ------------------->
// function App() {
  
//   const [counter,setcounter]=useState(0);

//   return (
//     <div className="App">
//       <PreviousProp count={counter} />
//       <button onClick={()=>setcounter(Math.floor(Math.random()*10))}>Update</button>
//     </div>
//   );
// }
// export default App;


// ----------------- LiftingState ------------------->
// function App() {

//   return (
//     <div className="App">
//       <LiftingState />
//     </div>
//   );
// }
// export default App;




// -------------- Passing html inside prop -------------->

// function HTMLRenderer(props) {
//   return <div>{props.html}</div>;
// }

// function App() {

//   const htmlContent = <p>This is some <strong>HTML</strong> content!</p>;
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <HTMLRenderer html={htmlContent} />
//     </div>
//   );
// }
// export default App;


// -------------- Toggle an element -------------->
// function App(){
//   const [status,setStatus]=useState(true);
//   return(
//     <div className="App">
//       {status? <h3>Good Morning</h3> :null }
//       <button onClick={()=>setStatus(!status)}>UPDATE</button>
//     </div>
//   )
// }
// export default App;


// -------------- Form_submit ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//       <Form_submit/>
//     </div>
//   )
// }
// export default App;


// -------------- Login_form ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//       <Login_form/>
//     </div>
//   )
// }
// export default App;


// -------------- Tenry_condition ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//       <Tenry_condition/>
//     </div>
//   )
// }
// export default App;


//-------------- UseEffect ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//       <UseEffect/>
//     </div>
//   )
// }
// export default App;


//-------------- UseEffect_prop ----------------- >
// const App=()=>{

//   const [Number,setNumber]=useState(10);
//   const [Count,setCount]=useState(15);


//   return(
//     <div className='App'>
//       <UseEffect_prop num={Number} count={Count}/>

//       <button onClick={()=>setNumber(Number+1)}>Update Number</button>
//       <button onClick={()=>setCount(Count+1)}>Update Count</button>
//     </div>
//   )
// }
// export default App;

//-------------- UseReducer ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//       <UseReducer/>
//     </div>
//   )
// }
// export default App;

//-------------- useCallback ----------------- >
const App=()=>{

  return(
    <div className='App'>
      <UseCallback/>
    </div>
  )
}
export default App;


//-------------- Css ----------------- >
// const App=()=>{

//   const styleItem ={backgroundColor:'green',color:'white'};

//   return(
//     <div className='App'>
//       <h2 className='primary'> Extarnal Css </h2>
//       <h2 style={{backgroundColor:'blue', color:'white'}}> Inline Css </h2>
//       <h2 style={styleItem}> Inline Css Second Way </h2>
//       <h2 className={style.success}> Custom Module Css </h2>
//     </div>
//   )
// }
// export default App;


//-------------- bootStrap ----------------- >
// import Button from 'react-bootstrap/Button';

// const App=()=>{

//   return(
//     <div className='App'>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>

//     </div>
//   )
// }
// export default App; 


//-------------- Loop_Map ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//         <Loop_Map/>
//     </div>
//   )
// }
// export default App; 


//-------------- Loop_Object ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//         <Loop_Object/>
//     </div>
//   )
// }
// export default App; 


//-------------- Loop_nested ----------------- >
// const App=()=>{

//   return(
//     <div className='App'>
//         <Loop_nested/>
//     </div>
//   )
// }
// export default App; 


//-------------- Loop_components ----------------- >
// const App=()=>{
//   const users=[
//     {Name:'Soaif',Age:24,Address:[{
//       Vill:'Dhapdhai',Dis:'South 24',Pin:74384
//     }]},
//     {Name:'Asif',Age:25,Address:[{
//       Vill:'Baruipur',Dis:'South 24',Pin:743355
//     }]},
//     {Name:'Sam',Age:26,Address:[{
//       Vill:'Kolkata',Dis:'South 24',Pin:700199
//     }]}
//   ];
//   const Keys=Object.keys(users[0]);
//   console.log(Keys);

//   return(
//     <div className='App'>
//       <Table>
//         <thead>
//           <tr>
//             {Keys.map((key,i)=>{
//               return(
//               <td key={i}>{key}</td>
//               )
//             })}
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((userDeta,j)=>{
//             return(
//             <Loop_components data={userDeta} numb={j}/>
//             )
//           })}
//         </tbody>
//       </Table>

        
//     </div>
//   )
// }
// export default App;


