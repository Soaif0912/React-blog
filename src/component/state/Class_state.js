import React from "react";

class Class_state extends React.Component{
    constructor(){
        super();
        this.state={
            Data:0
        }
    }
    update=()=>{
        this.setState({Data:this.state.Data+1})
    }
    render(){
        return(
            <div>
                <h3>{this.state.Data}</h3>
                <button onClick={this.update}>Update</button>
            </div>
        )
    }
}

export default Class_state;