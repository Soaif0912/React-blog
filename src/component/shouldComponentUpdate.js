import react,{Component} from 'react';

class ShouldComponentUpdate extends Component{
    constructor(){
        super();
        this.state={
            number:0,
        }
    }
    shouldComponentUpdate(){
        if(this.state.number<5){
        return true;
        }
    }

    render(){
        return(
            <div>
                <h3>{this.state.number}</h3>
                <button onClick={()=>{this.setState({number:this.state.number+1})}}>Update</button>
            </div>
        )
    }
}

export default ShouldComponentUpdate;