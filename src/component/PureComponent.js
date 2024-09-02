import React,{PureComponent,Component} from 'react';

// class Pure_component extends PureComponent{
//     constructor(){
//       super();
//       this.state={
//         value:1
//       }
//     }
//     render(){
//       console.log('render Update');
//       return(
//         <div>
//           <h1>{this.state.value}</h1>
//           <button onClick={()=>{this.setState({value:1})}}>Update</button>
//         </div>
//       )
//     }
//   }
//   export default Pure_component;


import PureComponentChild from './PureComponent_Child';

class Pure_component extends PureComponent{
    constructor(){
      super();
      this.state={
        value:1
      }
    }
    render(){
      console.log('render Update');
      return(
        <div>
          <PureComponentChild  count={this.state.value}/>
          <button onClick={()=>{this.setState({value:1})}}>Update</button>
        </div>
      )
    }
  }
  export default Pure_component;