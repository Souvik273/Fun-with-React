import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [second,setSecond] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log('Timer executed')
            setSecond(prevSecond=>prevSecond+1)
        },1000)

        return ()=>{
            alert('Timer Stopped')
            clearInterval(intervalId)
        };
    },[])
  return (
    <div>
      <h1>Second:{second}</h1>
    </div>
  )
}

export default TimerComponent
