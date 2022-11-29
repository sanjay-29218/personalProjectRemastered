import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-form-icon"/>
            <h4>Email</h4>
            <h5>sanjay29218@gmail.com</h5>
            <a href="mailto:sanjay29218@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <BsMessenger  className="contact-form-icon"/>
            <h4>Messenger</h4>
            <h5>Sanjay Poudel</h5>
            <a href="https://m.me/sanjay29218/">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <FaViber  className="contact-form-icon"/>
            <h4>Viber</h4>
            <h5></h5>
            <a href="viber://chat?number=9779861345770">Chat with me</a>
          </article>
        </div>
              {/* End of the contact section */}
            
        <form className="form" action="">
        <input type="text" className='text' name="name" placeholder="Enter your name" required /> 
        <input type="email" name="email" placeholder="Enter your email" required/>
        <textarea name="message" id="txtarea" cols="30" rows="5" placeholder="Your message"></textarea> <br />
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
      
      </div>

      
    </section>
  );
};

export default Contact;
