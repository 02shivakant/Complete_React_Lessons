import { useState } from 'react'
import './App.css'
import Cards from './Components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='maincontent'>
        <Cards name="Shiva"></Cards>
        <Cards name="Abhi"></Cards>
        <Cards name="Mayank"></Cards>
        
      </div>
    </>
  )
}

export default App
