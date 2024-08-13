import React from "react";
import NavBar from "./NavigationBar/NavBar";
import Shorter from "./Shorter/Shorter"
import styled from "styled-components";



const FarkUrl = () => {

    const Pages =[
        {
            id:0,
            path:"/",
            components:[
                {
                    id:0,
                    name:"Navigation Bar",
                    component:<NavBar></NavBar>
                },
                {
                    id:1,
                    name:"Shorter",
                    component:<Shorter></Shorter>
                }
            ]
        }
    ]

    return(
        <div>
            
            {Pages[0].components.map((component_) => {
                return component_.component   
            })}
            
        </div>)
}

export default FarkUrl;