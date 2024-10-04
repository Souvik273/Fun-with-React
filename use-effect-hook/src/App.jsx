import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    alert('count is updated')
    return ()=>{
      alert('Count is unmounted from UI')
    }
  },[count,total])

  function handleClick(){
    setCount(count + 1)
  }
  function handleTotal(){
    setTotal(total + count)
  }
  return (
    <>
      <button onClick={handleClick}>Count++</button>
      <br />
      Count is: {count}<br/>
      <button onClick={handleTotal}>Total++</button>
      <br />
      Total is : {total}
      <br/>
    </>
  )
}
export default App
