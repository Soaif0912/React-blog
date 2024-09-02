function Child(props){
    const message ='Good Morning';
    return(
        <div>
            <button onClick={()=>props.data(message)}>Click</button>
        </div>
    )
}
export default Child;