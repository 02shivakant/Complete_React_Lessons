import React, { useState } from 'react'
import './vote.css'
function Vote() {
    const [vote, setVote]= useState(0)
  return (
    <div className='voteContainer'>
      <h1 id='head'>No. of people vote is {vote} </h1>
      <div className="button">
        <button id='btn1' onClick={() => {setVote(vote+1) } }>VOTE</button>
         <button id='btn2' onClick={() => {setVote(vote-1) }}>NO VOTE</button>
      </div>

    </div>
  )
}

export default Vote
