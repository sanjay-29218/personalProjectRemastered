import React from 'react'
import './service-box.css'
import {AiOutlineCheck} from 'react-icons/ai'
const ServiceBox = (props) => {
  return (
	<>
	
	 <div className=" service-container">
		<div className="service-header">
			<h1>{props.serviceName}</h1>
		</div>
		<div className="service-detail-container">
		<div className="service-detail">
			<AiOutlineCheck/>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div className="service-detail">
			<AiOutlineCheck/>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div className="service-detail">
			<AiOutlineCheck/>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div className="service-detail">
			<AiOutlineCheck/>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		<div className="service-detail">
			<AiOutlineCheck/>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
		</div>
		</div> 
	</>
  )
}

export default ServiceBox
