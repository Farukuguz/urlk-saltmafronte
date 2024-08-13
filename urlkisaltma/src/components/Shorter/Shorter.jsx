import React, { useState } from "react";
import PaddingBox from "../PaddingBox";
import {Axios,AxiosPost,AxiosGet} from "../../utilities/Axios/Axios";
import Button from "../Button";

import axios from "axios";
import CustomInput from "../CustomInput";


const Shorter = () => {
    const [url,setUrl]= useState("")
    const linkSendHandler = async () => {
        try {
            const response = await axios.post("http://localhost:8080", {
                url:url 
            });
            console.log(response.data);
        } catch (error) {
            console.error(error); 
        }
    };
  
   
    return(
       
        <div>

              <PaddingBox>
                <CustomInput ></CustomInput>
                <input style={{fontFamily:"Helvetica",fontSize:"15px", width:"100%",background:"transparent", border:"none",outline:"none"}}  type="text" placeholder="URL Giriniz" ></input>
              </PaddingBox>
              <button style={{borderRadius:"180px",border:"none",outline:"none",background:"#A90432"}} onClick={linkSendHandler} > 
                <Button></Button>
              </button>
              
              
        </div> )
}


export default Shorter;