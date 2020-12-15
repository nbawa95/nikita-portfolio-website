import React, { Component } from 'react';
import Typed from 'react-typed';
import Container from 'react-bootstrap/Container';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return(
      <Container className='p-0' fluid>

          <div className='page'>
            <Element name='home'>
              <Home />
              </Element>
          </div>

          <div className='page'>
            <Element name='about'>
              <About />
            </Element>
          </div>

          <div className='page'>
            <Element name='projects'>
              <Projects />
            </Element>
          </div>

          <div className='page'>
            <Element name='contact'>
              <Contact />
            </Element>
          </div>

      </Container>
    )
  }
}
