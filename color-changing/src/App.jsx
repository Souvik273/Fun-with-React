import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <Navbar color={color} setColor={setColor}/>
    </>
  )
}

export default App
