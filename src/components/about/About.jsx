import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'></FiUsers>
              <h5>Clients</h5>
              <small>1M+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'></VscFolderLibrary>
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, incidunt odit voluptas eius magni deleniti beatae tenetur necessitatibus magnam pariatur corporis soluta odio id veritatis, accusamus tempore, quibusdam neque?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About