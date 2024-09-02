import React,{forwardRef} from "react";

function UserRef(prop,ref){

    return(
        <div>
            <input  ref={ref}/>
        </div>
    )
}
export default forwardRef(UserRef);