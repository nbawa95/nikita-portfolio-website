import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Contact.css';
import linkedInPic from './linkedin.png';
import githubIcon from './github.png';
import emailIcon from './email.png';
import etsyIcon from './etsy.png';
import nikitaIllustration from './nikita-illustration.png';
import pinkLine from './pinkLine.png';
import dottedLine from './dottedLine.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default class Contact extends Component {
  render() {
    return(
      <ParallaxProvider>
        <div className="main-contact">
        <div>
          <Parallax
            x={[0, 150]}
            tag="figure"
            styleOuter={{top: '35%', left: '1%', position: 'absolute'}}
          >
            <img src={dottedLine} />
          </Parallax>
          <Parallax
            x={[0, 150]}
            tag="figure"
            styleOuter={{top: '34%', left: '2%', position: 'absolute'}}
          >
            <img className="pinkCircle" src={pinkLine} />
          </Parallax>
          </div>
            <div className="contactIcons">
              <a href='https://www.linkedin.com/in/nikitabawa/' target='_blank'>
                <img className="pic" src={linkedInPic} />
              </a>
              <a href='https://github.com/nbawa95' target='_blank'>
                <img className="pic" src={githubIcon} />
              </a>
              <a href='mailto:nbawa95@gmail.com' target='_blank'>
                <img className="pic" src={emailIcon} />
              </a>
              <a href='https://www.etsy.com/shop/WonderCraftsCo' target='_blank'>
                <img className="pic" src={etsyIcon} />
              </a>
            </div>
          <div>
          <Parallax
            x={[0, -150]}
            tag="figure"
            styleOuter={{bottom: '42%', right: '10%', position: 'absolute'}}
          >
            <img src={dottedLine} />
          </Parallax>
          <Parallax
            x={[0, -150]}
            tag="figure"
            styleOuter={{bottom: '40%', right: '12%', position: 'absolute'}}
          >
            <img className="pinkCircle" src={pinkLine} />
          </Parallax>
          </div>
          <div className="pageTitle-contact">
            let's talk
          </div>
          <div>
            <img className="nikitaPic" src={nikitaIllustration} />
          </div>
        </div>
        </ParallaxProvider>
    );
  }
}
