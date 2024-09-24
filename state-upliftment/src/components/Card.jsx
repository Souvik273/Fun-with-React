import React from 'react'

const Card = ({value,setValue}) => {
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}

export default Card
