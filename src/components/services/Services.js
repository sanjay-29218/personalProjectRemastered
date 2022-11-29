import React from 'react'
import './services.css'
import ServiceBox from './ServiceBox'
const services = () => {
  return (
    
	<>
  <h2 className='service-h1'>Services</h2>
  <section id="services">
    
    <ServiceBox serviceName='UI/UX Design'></ServiceBox>
    <ServiceBox serviceName='Web Development'></ServiceBox>
    <ServiceBox serviceName='Machine Learning'></ServiceBox>
  </section>
  </>

  )
}

export default services
