import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>rladuwls2003@naver.com</h5>
            <a href="mailto:rladulws2003@naver.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>rladuwls2003@naver.com</h5>
            <a href="mailto:rladulws2003@naver.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>whatsApp</h4>
            <h5>+010-5742-3480</h5>
            <a href="https://api.whatsapp.com/send?phone+123456789" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form class="contact__form"  action="https://formspree.io/f/mjvzzwnr"
      method="POST">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" name="7" placeholder='Your Message' required>
          </textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact