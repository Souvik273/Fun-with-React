import React,{useContext} from 'react'
import { UserContext } from '../App'

const Child3 = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
    </div>
  )
}

export default Child3
