import Child from "./2nd";

function LiftingState(){
    
    function update(Data){
        alert(Data);
    }
    return(
        <div>
            <h2>Lifting stateup</h2>
            <Child data={update}/>
        </div>
    )
}
export default LiftingState;