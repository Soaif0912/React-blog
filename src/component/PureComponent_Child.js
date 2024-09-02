import { PureComponent } from "react";

class PureComponentChild extends PureComponent{

    render(){
        return(
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}
export default PureComponentChild;