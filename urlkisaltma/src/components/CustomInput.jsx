import React from "react";
import setUrl from "../components/Shorter/Shorter"
import { useState } from "react";

const CustomInput = () => {
    
   

    

    return(<div  style={{
        background: "white",
        padding: "10px",
        width:"500px",
        border: "2px solid red",
        borderRadius:"180px",  
        
    }}>
        
        <input style={{fontFamily:"Helvetica",fontSize:"15px", width:"100%",background:"transparent", border:"none",outline:"none"}} 
        type="text" placeholder="URL Giriniz" ></input>
        

    </div>)

}
export default CustomInput;