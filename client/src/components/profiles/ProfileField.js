//ProfileField contains logig to render a single 
//label and text input
import React from "react";


export default ({ input, label, meta:{ touched, error }}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ matginBottom: '5px'}}/>
      <div className="red-text" style={{ matginBottom: '20px'}}>
        {touched && error}
      </div>      

    </div>
  )
}
