import React from 'react'

const Button = ({color="olive",setColor}) => {
  return (
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:color}} 
    onClick={()=>setColor(color)}
    >{color}</button>
  )
}

export default Button
