import React, { useContext } from 'react'
import { userContext } from '../App'

const Child3 = () => {
    const value= useContext(userContext)
  return (
    <div>
      
        data:{value.name}
      
    </div>
  )
}

export default Child3
