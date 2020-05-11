import React from 'react'

const AvisoCuarentena = (props) => {
  return (
    <div style={{
      width: "100%",
      padding: "10px",
      borderLeft: "7px solid rgb(252, 236, 3)", 
      background: "rgba(252, 236, 3, .3)", 
      boxSizing: "border-box",
      marginBottom: "50px",
      textAlign: "left"
    }}>
      <div style={{marginBottom: "10px"}}>
        <strong>Aviso</strong>
      </div>
      {props.children}
    </div>
  )
}

export default AvisoCuarentena
