import React from 'react'
import mypic from '../assets/mypic.jpg'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='holoGram'>
       <div className="image">
        <img id='logo' src={mypic} alt="" />
       </div>
       <div className="info">
        <h1 id="title">{props.name}</h1>
        <p id="disc">I'm a software developer</p>
       </div>

    </div>
  )
}

export default Cards

