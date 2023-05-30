import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
   <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Web Publisher</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">very good</small>
            </div>          
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">very good</small>
            </div>      
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>jQuery</h4>
            <small className="text-light">good</small>
            </div>      
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">good</small>
            </div>      
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>React</h4>
            <small className="text-light">Basic</small>
            </div>      
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Photoshop</h4>
            <small className="text-light">good</small>
            </div>      
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Illustrate</h4>
            <small className="text-light">good</small>
            </div>      
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience