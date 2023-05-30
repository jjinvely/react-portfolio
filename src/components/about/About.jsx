import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {RiNumber1} from 'react-icons/ri'
import {RiNumber2} from 'react-icons/ri'
import {RiNumber3} from 'react-icons/ri'



const About = ()=>{
  return(
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiNumber1 className="about__icon"/>
              <small>Meaning Maker</small>
            </article>
            <article className='about__card'>
              <RiNumber2 className="about__icon"/>
              <small>Better than yesterday</small>
            </article>
            <article className='about__card'>
              <RiNumber3 className="about__icon"/>
              <small>Web Publisher</small>
            </article>
          </div>
          <p>버튼 하나에도 의미를 담는 웹퍼블리셔가 되겠습니다. 그러기 위해 어제보다 오늘 더 성장하자는 목표로 꾸준히  개발에 대한 공부를 놓치 않고 있습니다.</p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About