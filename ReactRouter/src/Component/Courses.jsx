import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Navbar.css'

const Courses = () => {
  return (
    <div>
      Courses:
      <ul>
        <li>
            <NavLink to='react' className={({isActive})=>isActive?'is-active':""}>React</NavLink>
        </li>
        <li>
            <NavLink to='javascript' className={({isActive})=>isActive?'is-active':""}>JavaScript</NavLink>
        </li>
        <li>
            <NavLink to='dsa' className={({isActive})=>isActive?'is-active':""}>DSA</NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Courses
