import React from 'react'
import Header from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='home-wrap'>
      <Dashboard/>
      <About/>
      <Portfolio/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home