import { createContext, use, useState } from 'react'
import './App.css'
import Child1 from './components/Child1'

const userContext = createContext();


function App() {
  const [user, setUser] = useState({name:"shiva"})

  return (
    <>
      <userContext.Provider value={user}>
        <Child1/>
      </userContext.Provider>
    </>
  )
}

export default App
export {userContext}