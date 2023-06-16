import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

function Nav() {
  const [activeNav, SetAcctiveNav] = useState('#')
  return (
    <nav> 
      <a href='#' onClick={() => SetAcctiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => SetAcctiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => SetAcctiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={() => SetAcctiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => SetAcctiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav