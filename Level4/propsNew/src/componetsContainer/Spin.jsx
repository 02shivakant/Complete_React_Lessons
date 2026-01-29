import React from 'react'
import "./Spin.css"
function Spin(props) {
    
  return (
    <div>
        {props.children}
     <button onClick={props.spinCount} id='button'>
        {props.spinCount}
        {props.text}
     </button>
    </div>
  )
}

export default Spin
