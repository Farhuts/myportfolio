import React from 'react';
import NavbarCss from './navbarCss.css';

const Navbar = () => (
  <div>
    <div className='navbar'>
      <nav >
        <div className='nav-item'>
          <a data-scroll class="hov-color-red" href="#content" >About Me</a>
        </div>
        <div className='nav-item'>
          <a data-scroll class="hov-color-red" href="#projects" >Projects</a>
        </div>
        <div className='nav-item'>
          <a data-scroll class="hov-color-red" href="#experience" >Experience</a>
        </div>
      </nav>
    </div>
  </div>
)

export default Navbar
