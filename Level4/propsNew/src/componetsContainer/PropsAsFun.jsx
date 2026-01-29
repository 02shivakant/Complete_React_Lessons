import React from 'react'
import "./Spin.css"
function PropsAsFun(props) {
  return (
    <div className='newcon'>
       {props.name}
      {props.children}
    </div>
  )
}

export default PropsAsFun
