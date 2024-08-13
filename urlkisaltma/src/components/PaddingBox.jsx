import React from "react";
import CustomInput from "./CustomInput";
import Button from "./Button";
import handleChange from "../components/CustomInput"


const PaddingBox = () => {
   
    return(
        <div style={{
            padding: "20px",
            margin:"60px",
            fontSize:"15px",
            fontFamily:"Helvetica",
            textAlign: "left",
               
        }}>
              <h1>FarkURLShortener</h1>
              <pre style={{fontSize:"20px", fontFamily:"Helvetica"}}>Kısa Linkine Tek Tıkla Ulaş </pre>
              <div style={{display:"flex",gap:"10px"}}>
                
             <CustomInput >
                
             </CustomInput>
              </div> 
           
              
        </div>)
}

export default PaddingBox;