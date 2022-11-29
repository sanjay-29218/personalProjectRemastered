import React from 'react'
import './experience.css'
import FrontendSkill from './FrontendSkill'
const experience = () => {
  return (
	<section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience-container">
      <div className="experience-frontend">
        <div className='frontend-header'>Frontend Development</div>
        <div className="frontend-skill">
        <FrontendSkill name='HTML' level='Experienced'/>
        <FrontendSkill name='CSS' level='Experienced'/>
        <FrontendSkill name='JavaScript' level='Experienced'/>
        <FrontendSkill name='Bootstrap' level='Basic'/>
        <FrontendSkill name='SCSS' level='Experienced'/>
        <FrontendSkill name='React' level='Intermediate'/>
        <FrontendSkill name='Next' level='Intermediate'/>
        </div>
      </div>
      <div className="experience-backend">
        <div className='backend-header'>Backend Development</div>
        <div className="backend-skill">
        <FrontendSkill name='Node JS' level='Begineer'/>
        <FrontendSkill name='MongoDB' level='Begineer'/>
        <FrontendSkill name='MySQL' level='Basic'/>
        <FrontendSkill name='Python' level='Intermediate'/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default experience
