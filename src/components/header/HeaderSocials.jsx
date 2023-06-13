import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/robinson-sablons-de-g%C3%A9lis-297772194/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/RobinsonSdG" target='_blank'><BsGithub/></a>
        <a href="https://dribbble.com" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials