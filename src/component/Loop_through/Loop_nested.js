import Table from 'react-bootstrap/Table';

function Loop_nested(){

    const Users=[{Name:'Soaif',Age:24,Address:[
                    {Vill:'Dhapdhapi',Pin:743387},
                    {Vill:'Baruipur',Pin:784487},
                    {Vill:'Kolkata',Pin:700387}
                ]},
                {Name:'Asif',Age:26,Address:[
                    {Vill:'Baruipur',Pin:743387},
                    {Vill:'Kolkata',Pin:743387},
                    {Vill:'Dhapdhapi',Pin:743387}
                ]},
                {Name:'Ram',Age:29,Address:[
                    {Vill:'Sector V',Pin:799015},
                    {Vill:'Kolkata',Pin:743387},
                    {Vill:'Sealdha',Pin:70011}
                ]},
    ]
    const key=Object.keys(Users[0]);
    console.log(key);


    return(
        <div>
            <Table bordered variant='dark'>
                <thead>
                    <tr>
                        <th>Serial No</th>
                        {key.map((userKey,Number)=>{
                            return(
                            <th key={Number}>{userKey}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Users.map((userDeta,Numer)=>{
                        return(
                        <tr key={Numer}>
                            <td>{Numer+1}</td>
                            <td>{userDeta.Name}</td>
                            <td>{userDeta.Age}</td>
                            <td>
                                <Table>
                                    <tbody>
                                        {userDeta.Address.map((userAddr,Num)=>{
                                            return(
                                            <tr key={Num}>
                                                <td>{Num+1}</td>
                                                <td>{userAddr.Vill}</td>
                                                <td>{userAddr.Pin}</td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>


            </Table>

        </div>
    )
}
export default Loop_nested;