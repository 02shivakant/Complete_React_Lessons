import { useState } from 'react'
import './App.css'
import Spin from './componetsContainer/Spin'
import PropsAsFun from './componetsContainer/PropsAsFun'
function App() {
  const [count, setCount] = useState(0)

  function spinCount(){
    setCount(count+1)
  }

  return (
    <>
      <div className="container">
         <PropsAsFun name="Shivakant Pandey">
        <h1>this is a prop using function basic lerning project</h1>
        <h1> click on spin button to increse the countcommunity </h1>
      </PropsAsFun>
      <Spin spinCount={spinCount} text="SPIN">
          <p>Count is : {count}</p>

      </Spin>
      </div>
     
    </>
  )
}

export default App
