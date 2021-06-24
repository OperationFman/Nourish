import React from "react"
import "./Navbar.css"

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      <h1> Nourish </h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Search</li>
      <li className="navbar--link-item">Sort</li>
      <li className="navbar--link-item">Login</li>
    </ul>
  </nav>
)
export default Navbar