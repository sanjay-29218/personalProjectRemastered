import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mes.png'
import HeaderSocial from './HeaderSocial'
const header = () => {
  return (
	<>
	<header>
	<div className="container header__container"></div>
	<h5>Hello I'm</h5>	
	<h1>Sanjay Poudel</h1>
	<h5 className="text-light">Fullstack Developer</h5>
	<CTA/>
	<div className="me">
		<img src={ME} alt="" />
	</div>
	<div className="scroll-down">ScrollDown</div>
	<HeaderSocial/>
	</header>
	</>
  )
}

export default header
