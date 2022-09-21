import React from 'react'
import { Link,NavLink } from 'react-router-dom'
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>The layouts to render on the page</p>
      <p>Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data. React Router's nested routes were inspired by the routing system in Ember.js circa 2014. The Ember team realized that in nearly every case, segments of the URL determine:</p>
        <NavLink className="nav" to="/">Go to Home</NavLink>&nbsp;
        <NavLink className="nav" to="/user/akash/maurya" state={{ name:"akash",age:27 }}>User</NavLink>&nbsp;
        <NavLink  className="nav" to="/user/rohit/maurya">User2</NavLink>
    </div>
  )
}
