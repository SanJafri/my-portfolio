import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import './NavbarStyles.css'
import {Link} from 'react-scroll'

function Navbar() {

  const [nav,setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo dark' : 'logo'}>
            <h2>My Portfolio.</h2>
        </div>
        <ul className='nav-menu'>
            <Link to='home' smooth={true} duration={true}><li>Home</li></Link>
            <Link to='project' smooth={true} duration={true}><li>Project</li></Link>
            <Link to='about' smooth={true} duration={true}><li>About</li></Link>
            <Link to='gallery' smooth={true} duration={true}><li>Gallery</li></Link>
            <Link to='contact' smooth={true} duration={true}><li>Contact</li></Link>
        </ul>

        {/* mobile form */}
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<HiOutlineMenuAlt4 className='icon'/>) : (<AiOutlineClose style={{color: '#000'}} className='icon'/>)}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <ul className='mobile-nav'>
            <Link to='home' smooth={true} duration={true}><li>Home</li></Link>
            <Link to='project' smooth={true} duration={true}><li>Project</li></Link>
            <Link to='about' smooth={true} duration={true}><li>About</li></Link>
            <Link to='gallery' smooth={true} duration={true}><li>Gallery</li></Link>
            <Link to='contact' smooth={true} duration={true}><li>Contact</li></Link>
          </ul>
          <div className='mobile-menu-button'>
            <div className='social-icons'>
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

export default Navbar