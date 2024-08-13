import React from "react";

const NavBarComponent = () => {

    return <div style={{ 
        backgroundColor: '#A90432', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontFamily:'Helvetica',
        color: 'white',
        listStyle: 'none',
        padding: '30px',
        fontSize: '20px',
        
           
      }}>
        <h1>Fark Url Shortener</h1>
        <ul style={{fontSize:"15px"}}>
                     
              Anasayfa

              /

              Hakkımda
        </ul>
      </div>      
}
export default NavBarComponent;