import React from 'react'
import { BsLink } from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BiNote} from 'react-icons/bi';
function HeaderSocial() { 
  return (
    <div className="header__socials">
      <a href="https://groverenewal.netlify.app/" target="_blank"><BsLink /></a>
      <a href="https://github.com/jjinvely" target="_blank"><BsGithub/></a>
      <a href="https://www.notion.so/javascript-54951694011444958e4c29b8bc126974" target="_blank"><BiNote/></a>
    </div>
  )
}

export default HeaderSocial