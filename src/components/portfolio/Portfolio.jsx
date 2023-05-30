import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: '리뉴얼 반응형 웹사이트',
    github:"https://github.com/jjinvely/portfolio",
    demo: "https://groverenewal.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: '반응형 웹사이트',
    github:"https://github.com/jjinvely/website",
    demo:"https://gofor-it.netlify.app/"    
  },
  {
    id: 3,
    image: IMG3,
    title: '리액트 웹사이트',
    github:"https://github.com/jjinvely/react-site2-3__",
    demo:"https://react-sites2.netlify.app/"    
  },
  {
    id: 4,
    image: IMG4,
    title: '리액트 푸드웹사이트',
    github:"https://github.com/jjinvely/react_foodapp.github.io",
    demo: "https://reactfoodapp1.netlify.app/"
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </div>
          </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio