import React,{Component} from "react";

class Component_Did_Update extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('component did Update',prevState.count,this.state.count);
        if(prevState.count===this.state.count){
            alert('Count already updated.')
        }
    }

    render(){
        return(
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={()=>{this.setState({count:1})}}>Update</button>
            </div>
        )
    }
}
export default Component_Did_Update;


// ------------------------ Infinite ComponentDidUpdate ------------------

// class Component_Did_Update extends Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//     componentDidUpdate(prevProps,prevState,snapshot){
//         // console.log('component did Update',prevState.count,this.state.count);
//         if(this.state.count<5){
//         this.setState({count:this.state.count+1})
//         }

//     }

//     render(){
//         return(
//             <div>
//                 <h4>{this.state.count}</h4>
//                 <button onClick={this.setState({count:this.state.count+1})}>Update</button>
//             </div>
//         )
//     }
// }
// export default Component_Did_Update;