import React from "react";
import './Loader.css'

const Loader=(props)=>{

   return(
       props.isFatching ? <div className="lds-circle"><div></div></div>  : null
   )
}
export default Loader;