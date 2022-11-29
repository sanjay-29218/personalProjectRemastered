import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './frontendskill.css'
const FrontendSkill = (props) => {
  return (
	<>
	<div className="frontend-with-icon">
	<BsFillPatchCheckFill/>
	 <div className="skill-desc">
	 <h5>{props.name}</h5> 
	<h5>{props.level}</h5>
	 </div>
	</div>
	</>
  )
}

export default FrontendSkill