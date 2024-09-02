
import React from 'react';

class Class_prop extends React.Component{
    render(){
        return(
            <div>
                <h1> Name {this.props.Name}</h1>
                <h5> Email {this.props.Email}</h5>
            </div>
        )
    }
}

export default Class_prop;