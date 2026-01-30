import { useState } from 'react'
import './App.css'
import Hide$show from './components/Hideshow'

function App() {
  const [name, setName] = useState('')

  return (
    <>
     <div >
       <Hide$show  name={name} setName={setName}/>
     </div>
      
    </>
  )
}

export default App
