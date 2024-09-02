import Table from 'react-bootstrap/Table';

function Loop_Object(){

    const Student=[
        {Name:'Soaif Ikbal',Age:'24',Gender:'Male'},
        {Name:'Asif Ikbal',Age:'26',Gender:'Male'},
        {Name:'Ram Sen',Age:'28',Gender:'Male'},
        {Name:'Jeni Sass',Age:'24',Gender:'Female'},
    ];

    const keys = Object.keys(Student[0]);
    console.log(keys);


    return(
        <div>
            <Table striped bordered hover variant='dark'>
                <thead>
                <tr>
                            <th>Serial No</th> 
                    {keys.map((key,index)=>{

                        return(
                            <th key={index}> {key}</th>
                        )
                    })}
                </tr>
                </thead>

                <tbody>
                {Student.map((item,index)=>{
                    return(
                        item.Gender=='Male'?
                        
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Gender}</td>
                        </tr> : null
                        
                    )
                })}
                </tbody>

            </Table>
        </div>
    )
}
export default Loop_Object;