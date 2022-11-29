import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
const headerSocial = () => {
  return (
	<div className='header__socials'>
	  <a href="https://linkedin.com" target='_blank' ><BsLinkedin/></a>
	  <a href="https://github.com" target='_blank'><BsGithub/></a>
	  <a href="https://facebook.com" target='_blank'><AiFillFacebook/></a>
	</div>
  )
}

export default headerSocial
