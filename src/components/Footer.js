import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectCard from "./ProjectCard";
import './Footer.css';
import * as Scroll from 'react-scroll';
import { Parallax, Background } from "react-parallax";
import linkedInPic from './linkedin.png';
import githubIcon from './github.png';
import emailIcon from './email.png';
import behanceIcon from './behance.png';


let Link = Scroll.Link;


export default class Footer extends Component {
  render() {
    return(
        <div className="footer-main">
        <div className="footerContainer">
          <div style={{color: "white", textAlign: "center", fontSize: '1.5rem'}}>
            let's connect
          </div>
          <a href='https://www.linkedin.com/in/nikitabawa/' target='_blank'>
            <img className="pic" src={linkedInPic} />
          </a>
          <a href='https://github.com/nbawa95' target='_blank'>
            <img className="pic" src={githubIcon} />
          </a>
          <a href='mailto:nbawa95@gmail.com' target='_blank'>
            <img className="pic" src={emailIcon} />
          </a>
          <a href='https://www.behance.net/nikitab5' target='_blank'>
            <img className="pic" src={behanceIcon} />
          </a>
          <div style={{color: "white", textAlign: "center"}}>
            Copyright © Nikita Bawa 2020
          </div>
        </div>
        </div>
    );
  }
}
