function Loop_components(props){

    return(
        <tr key={props.numb}>
            <td>Name: {props.data.Name}</td>
            <td>Name: {props.data.Age}</td>
        </tr>
    )
}
export default Loop_components;