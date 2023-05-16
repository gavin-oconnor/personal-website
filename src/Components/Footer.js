import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-github-container">
        <a className="icon-link" href="https://github.com/gavin-oconnor" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size={60} className="footer-icon-1"/>
        </a>
        </div>
        <div className="footer-linkedin-container">
        <a className="icon-link" href="https://www.linkedin.com/in/gavinfoconnor/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size={60} className="footer-icon-2"/>
        </a>
        </div>  
    </div>
  )
}

export default Footer