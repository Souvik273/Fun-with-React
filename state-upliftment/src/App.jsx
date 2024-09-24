import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>State-Upliftment</h1>
      <Card value={value} setValue={setValue}/>
      <p>I am inside parent component:{value}</p>
    </>
  )
}

export default App
