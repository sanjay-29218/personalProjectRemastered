import React from 'react'
import './portfolio-box.css'
const PortfolioBox = ({img , title, links,demo}) => {
  return (

	<>
	<article className='portfolio-box'>
		<img src={img} alt="" className="portfolio-img" />
		<h2>{title}</h2>
		<div className="portfolio-btns">
			<button className='btn btn-portfolio'><a href={links} target='_blank'>Github</a></button>
			{demo&&<button className="btn btn-primary"><a href={demo} target='_blank'>Live Demo</a></button>}
			
		</div>
	</article>
	</>
  )
  }
export default PortfolioBox
