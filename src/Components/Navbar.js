import React from 'react'
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <BrowserView>
    <div className="navbar-container">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/blog">Blog</Link>
    </div>
    </BrowserView>
    <MobileView>
    <div className="m-navbar-container">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/blog">Blog</Link>
    </div>
    </MobileView>
    </>
  )
}

export default Navbar