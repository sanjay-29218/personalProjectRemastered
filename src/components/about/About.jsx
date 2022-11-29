import React from 'react'
import './about.css'
import ABT from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {GrProjects} from 'react-icons/gr'
import {BsPeopleFill} from 'react-icons/bs'
const About = () => {
  return (
	<section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ABT} alt="..." /> 
        </div>
      </div>
    
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward/>
          <h5>Experience</h5>
          <small>Not working</small>  
        </article>
        <article className='about__card'>
          <BsPeopleFill/>
          <h5>Clients</h5>
          <small>-</small>  
        </article>
        <article className='about__card'>
          <GrProjects/>
          <h5>Projects</h5>
          <small>10+</small>  
        </article>
      </div>
        <p className="about__para">
        Creative Front End Developer with strong abilities in scss, react and nextjs. My curiosity and work ethic allow me to seek out learning opportunities in all projects in order to further contribute towards its success. I am highly flexible and adaptable to the fast-paced development environment and last-minute changes, remaining confident even in the most stressful situations.
        </p>
        <button className="btn">
          Let's Talk
        </button>
    </div>
    </div>
  </section>
  )
}

export default About
