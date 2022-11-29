import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {AiTwotoneAccountBook} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiFillContacts} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
const [active , setActive] = useState('#');
  return (
	<div className="nav">
		<nav >
	  <a href="#" onClick={()=>setActive('#')} className={active==='#' ? 'active': ''}><AiFillHome/></a>
	  <a href="#about" onClick={()=>setActive('about')} className={active==='about'? 'active':''}><AiOutlineUser/></a>
	  <a href="#experience"   onClick={()=>setActive('experience')} className={active==='experience'? 'active':''}><FcAbout/></a>
	  <a href="#services"  onClick={()=>setActive('services')} className={active==='services'? 'active':''}><AiTwotoneAccountBook/></a>
	  <a href="#testimonials"   onClick={()=>setActive('testimonials')} className={active==='testimonials'? 'active':''}><AiOutlineUsergroupAdd/></a>
	  <a href="#contact"   onClick={()=>setActive('contact')} className={active==='contact'? 'active':''}><AiFillContacts/></a>
	</nav>
	</div>
  )
}

export default Navbar
