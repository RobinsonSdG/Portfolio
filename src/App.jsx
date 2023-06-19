import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Nav/>
      <Experience/>
      <Contact/>
      <Services/>
      <Testimonials/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App