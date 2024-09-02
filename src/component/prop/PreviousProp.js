
import {useEffect,useRef} from 'react';

function PreviousProp(prop){

    const lastValue = useRef();
    useEffect(()=>{
        lastValue.current = prop.count;
    })

    const previousProp = lastValue.current;
    return(
        <div>
            <h2>Current prop {prop.count}</h2> <br/>
            <h2>Previous prop {previousProp}</h2>

        </div>
    )
}
export default PreviousProp;