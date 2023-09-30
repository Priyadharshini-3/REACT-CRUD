import React from "react";
import { useHistory } from "react-router-dom";


function Page_Not_Found(){
    const history=useHistory();
return(

<div>
<h1>PLEASE GO BACK TO HOMEPAGE</h1>
<button className="card-btn" onClick={()=>history.push("/")}>HOME</button>
</div>
    
)


}


export default Page_Not_Found;