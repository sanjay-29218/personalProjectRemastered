import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Services'
import Portfolio from './components/porfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'

const App = () => {
  return (
	<>
	 <Header/>
	 <Navbar/>
	 <About/>
	 <Experience/>
	 {/* <Service/> */}
	 <Portfolio/>
	 {/* <Testimonials/> */}
	 <Contact/>
	 <Footer/>
	</>
  )
}

export default App
