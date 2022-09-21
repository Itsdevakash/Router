import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <div className='navbar'>
        <NavLink  
        style={({isActive})=>{return{background:isActive?"yellow":'red'}}} className="nav-link" to="/">Home</NavLink> &nbsp;
        <NavLink style={({isActive})=>{return{background:isActive?"yellow":'red'}}} className="nav-link" to="/about">About</NavLink>&nbsp;
        <NavLink style={({isActive})=>{return{background:isActive?"yellow":'red'}}} className="nav-link" to="/filter">Filter</NavLink>&nbsp;
        
        <NavLink style={({isActive})=>{return{background:isActive?"yellow":'red'}}} className="nav-link" to="/contact">Contact</NavLink>&nbsp;
        <NavLink style={({isActive})=>{return{background:isActive?"yellow":'red'}}} className="nav-link" to="/login">Login</NavLink>&nbsp;
        
        </div>
       
    </div>
  )
}
