import React from "react";

class Class_condition extends React.Component{

    constructor(){
        super();
        this.state={
            Data:0
        }
    }

    UpdateData=()=>{
        if(this.state.Data<10){
            this.setState({Data:this.state.Data+1})
        }else{
            alert("Can't increase gretter than 10.")
        }
    }

    render(){
    return(
        <div>
            <h3>{this.state.Data}</h3>
            <button onClick={this.UpdateData}>UPDATE</button>
        </div>
    )

    }
}

export default Class_condition;