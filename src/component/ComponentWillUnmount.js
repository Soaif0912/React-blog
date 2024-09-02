import React,{Component} from 'react';

class ComponentWillUnmount extends Component{

    componentWillUnmount(){
        alert('Component removed.');
    }

    render(){

        return(
            <div>
                <h3>Component Showing</h3>
            </div>
        )
    }
}
export default ComponentWillUnmount;