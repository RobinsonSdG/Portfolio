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
      <a href='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav