import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Contact.css';
import linkedInPic from './linkedin.png';
import githubIcon from './github.png';
import emailIcon from './email.png';
import etsyIcon from './etsy.png';
import nikitaIllustration from './nikita-illustration.png';
import outerRing from './outerRing.png';
import innerRing from './innerRing.png';
import innerCircle from './innerCircle.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';



export default class Contact extends Component {
  render() {
    return(
      <ParallaxProvider>
        <div className="main-contact">
        <Parallax
          y={[-80, 0]}
          tag="figure"
          styleOuter={{top: '40%', left: '15%', transform: 'translate(-50%, -50%)', position: 'absolute'}}
        >
          <img className="outerRing" src={outerRing} />
        </Parallax>
        <Parallax
          y={[-80, -25]}
          tag="figure"
          styleOuter={{top: '40%', left: '15%', transform: 'translate(-50%, -50%)', position: 'absolute'}}
        >
          <img className="innerRing" src={innerRing} />
        </Parallax>
        <Parallax
          y={[-80, -55]}
          tag="figure"
          styleOuter={{top: '40%', left: '15%', transform: 'translate(-50%, -50%)', position: 'absolute'}}
        >
          <img className="innerCircle" src={innerCircle} />
        </Parallax>
        <div>
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
        </div>
        <div className="pageTitle-contact">
          let's talk
        </div>
        <div>
        <Parallax
          x={[40, -30]}
          tag="figure"
          styleOuter={{float: 'right', bottom: '0px', right: '0px', position: 'absolute'}}
        >
          <img className="nikitaPic" src={nikitaIllustration} />
        </Parallax>
        </div>
      </div>
      </ParallaxProvider>
    );
  }
}
