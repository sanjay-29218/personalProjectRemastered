import React from 'react'
import './portfolio.css'
import PortfolioBox from './PortfolioBox'
import pimg2 from '../../assets/portfolio2.jpg'
import pimg1 from '../../assets/portfolio1.jpg'
import pimg3 from '../../assets/portfolio3.jpg'
import pimg4 from '../../assets/portfolio4.jpg'
import pimg5 from '../../assets/portfolio5.png'
import pimg6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
	<section id="portfolio">
    <h2>Projects</h2>
    <div className="container portfolio-container">
      <PortfolioBox img={pimg1} title='React Blog' links='https://github.com/sanjay-29218/ReactBlogPost'/>
      <PortfolioBox img={pimg2} title='Quiz App' links={'https://github.com/sanjay-29218/QuizApp'}  demo={"https://quiz-app-three-pi.vercel.app/"}/>
      <PortfolioBox img={pimg3} title='Portfolio Clone' links={"https://github.com/sanjay-29218/My-Personal-Website"}/>
      <PortfolioBox img={pimg4} title='Freelancing Site' links={"https://github.com/sanjay-29218/FreelancingSite"}/>
      <PortfolioBox img={pimg5} title='LinkedIn Clone' links={"https://github.com/sanjay-29218/LInkedin-clone"} demo='https://linkedin-clone-6c8d0.web.app/'/>
      <PortfolioBox img={pimg5} title='Music Recommeder using Emotion Detection' links={"https://github.com/sanjay-29218/FinalYearProjectRemastered.git"} />
      <PortfolioBox img={pimg5} title='Spotify Clone' links={"https://github.com/sanjay-29218/Spotify-CLone.git"} />
      {/* <PortfolioBox img={pimg5} title='' links={}/>
      <PortfolioBox img={pimg6} title='' links={}/> */}
      
    </div>
  </section>
)
  }
export default Portfolio;