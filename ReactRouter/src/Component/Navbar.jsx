import { NavLink } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/" className ={({isActive})=>isActive?'active-class':""}>
                Home
            </NavLink>
        </li>
        <li>
        <NavLink to="/about" className ={({isActive})=>isActive?'active-class':""}>
                About
            </NavLink>
        </li>
        <li>
        <NavLink to="/dashboard" className ={({isActive})=>isActive?'active-class':""}>
                Dashboard
            </NavLink>
        </li>
        <li>
          <NavLink to="/:id" className={({isActive})=>isActive?'active-class':''}>Param</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
