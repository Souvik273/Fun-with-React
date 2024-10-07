import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const DashBoard = () => {
  const navigate = useNavigate()
  function handleClick(){
      navigate('courses')
  }
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Courses</button>
      <Outlet/>
    </div>
  )
}

export default DashBoard
