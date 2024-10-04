import {createContext,useState} from 'react'
import Child1 from './Components/Child1'

const UserContext = createContext()

function App() {

  const [user,setUser] = useState({name:'souvik',age:23})

  return (
    <>
     <UserContext.Provider value={user}>
      <Child1/>
     </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}