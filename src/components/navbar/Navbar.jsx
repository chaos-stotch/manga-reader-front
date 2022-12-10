import React from 'react'
import logo from '../../assets/icon.png'
import './navbar.css'
import { RiAccountCircleFill } from 'react-icons/ri'


function Navbar() {
  return (
    <header>
      <a href='/'>
        <img src={logo} alt="logo" className='logo'/>
      </a>
      <RiAccountCircleFill className='profile__icon'/>
    </header>
  )
}

export default Navbar