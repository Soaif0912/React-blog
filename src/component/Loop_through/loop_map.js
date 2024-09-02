function Loop_Map(){
    const Name=['Soaif','Asif','Subhamay','rohit','Ram','Sam'];

    return(
        <div>
            <table>
                {Name.map((item)=>{
                    return(
                    <tr>
                        {item}
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Loop_Map;