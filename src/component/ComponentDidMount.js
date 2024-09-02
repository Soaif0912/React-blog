import React, { Component } from "react";

class ComponentDidMount extends Component {
    constructor() {
        super();
        this.state = {
            Name: 'soaif',
            Gender: 'Male'
        };
    }

    componentDidMount() {
        console.warn('componentDidMount');
    }

    render() {
        console.warn('render');
        return (
            <div>
                <h3>{this.state.Name}</h3>
                <h5>{this.state.Gender}</h5>
                <button onClick={() => this.setState({ Name: 'Jeni', Gender: 'Female' })}>Update</button>
            </div>
        );
    }
}
export default ComponentDidMount;
