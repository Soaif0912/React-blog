function Click_event(){
    function Update(){
        alert('Hello World');
    }
    return(
        <div>
            <h4>Good Evening</h4>
            <button onClick={Update}>Alert</button>
        </div>
    )
}
export default Click_event;