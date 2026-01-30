import React from 'react'
import "./Hideshow.css"
const hide$show = (props) => {
  return (
    <div className='container'>
      <input type="text" onChange={(e)=> props.setName(e.target.value)} /> 
      <p> This is input field where we use test statelift and the value is :{props.name}</p>
      
    </div>
  )
}

export default hide$show
