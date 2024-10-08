import React, { useRef } from 'react'

const ChangeColor = () => {
    const colorRef = useRef()
    function handleClick(){
        colorRef.current.style.backgroundColor=colorRef.current.id
    }
  return (
    <>
      <div ref={colorRef} id='red'>Red</div>
      <button onClick={handleClick}>Change color </button>
    </>
  )
}

export default ChangeColor
