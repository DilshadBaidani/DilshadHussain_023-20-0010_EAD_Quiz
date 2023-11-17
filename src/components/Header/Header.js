import React from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from './HeaderElements'

const Header = ({ toggle }) => {
  return (
    <div className='Container' style={{ padding: 0 }}>
      <Nav>
        <Logo to='/'>
          <img src='/image 1.png' alt='logo' />
        </Logo>
        <NavMenu>
          <NavLink className='menu-item' to='home'>
            Home
          </NavLink>
          <NavLink className='menu-item' to='menu'>
            Menu
          </NavLink>

          <NavLink className='menu-item' to='about'>
            About Us
          </NavLink>
          <NavLink className='menu-item' to='contact'>
            Contact
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <a
            className='btn PrimaryBtn'
            href='https://linkedin.com/in/pedro-sales-muniz'
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  )
}

export default Header
