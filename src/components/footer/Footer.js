import React from 'react'
import './FooterStyles.css'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className="co ntainer">
            <div className="top">
                <h2>My Portfolio.</h2>
                <div className="social">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon'/>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <FaGithub className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className='icon'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer