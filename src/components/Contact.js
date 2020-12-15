import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './Contact.css';
import linkedInPic from './linkedin.png';
import githubIcon from './github.png';
import emailIcon from './email.png';
import etsyIcon from './etsy.png';
import nikitaIllustration from './nikita-illustration.png';

export default class Contact extends Component {
  render() {
    return(
        <div className="main-contact">
          <div className="pageTitle-contact">
            let's talk
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
            <img className="nikitaPic" src={nikitaIllustration} />
          </div>
        </div>
    );
  }
}
