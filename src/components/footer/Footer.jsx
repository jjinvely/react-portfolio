import React from 'react'
import './footer.css'
import { BsLink } from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BiNote} from 'react-icons/bi';

function footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">YEOJIN</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="http://jjin2.dothome.co.kr/" target="_blank"><BsLink /></a>
        <a href="https://github.com/jjinvely" target="_blank"><BsGithub/></a>
        <a href="https://www.notion.so/javascript-54951694011444958e4c29b8bc126974" target="_blank"><BiNote/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; YEOJIN Tutorials All rights reserved
        </small>
      </div>
    </footer>
    )
}

export default footer