import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/blog">Blog</Link>
    </div>
  )
}

export default Navbar