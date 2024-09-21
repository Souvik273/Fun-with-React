
import { useState } from 'react'
import './App.css'
import User from './Components/User'

function App() {
  // let counter=5

  let [counter,setCounter] = useState(5)

  function addValue(){
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    console.log(counter)
  }
  function removeVal(){
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>

      <User name="Souvik" company="TCS"/>
      <User name="Subhangi" company="P360"/>
      <User name="Swapnil" />

      <h2>Fun with React</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeVal}>Decrease Value</button>
    </>
  )
}

export default App
