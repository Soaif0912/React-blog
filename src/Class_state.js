import React, {Component} from 'react';

export default class Class_state extends Component{

    constructor(){
        super();
        this.state={
            data:2
        }
        // Binding the method to the component instance
        this.Upadate_data = this.Upadate_data.bind(this);
    }

    Upadate_data(){
        if(this.state.data < 10){
        this.setState({ data:this.state.data + 2 });
        }else{
            alert('Unable to update more than '+ this.state.data);
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.Upadate_data()}> UpDate </button>
            </div>
        )
    }
}
