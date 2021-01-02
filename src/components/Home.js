import React, { Component } from 'react';
import Typed from 'react-typed';
import * as Scroll from 'react-scroll';
import scrollDown from "./scrollDown.png";
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Home.css';
import Sky from 'react-sky';
import myImage from "./star-nikita-light.png";


let Link = Scroll.Link;

export default class Home extends Component {
  render() {
    return(
        <div id='main' style={{backgroundColor: '#000000', fontFamily: 'Pier Sans', height: '100%'}}>
          <div className="centered">
              <span style={{color: '#ff5d73'}}>hi, </span><span>I'm </span>
              <Typed strings={['a computer science major.', 'an aspiring digital product designer.', 'a Georgia Tech alumn (go jackets!).', 'nikita bawa.']}
                   typeSpeed={40}
                   backSpeed={20}
                   backDelay={2000}
              />
          </div>
          <Link smooth={true} duration={500} to='about'>
            <div className="arrowDiv">
              <img className="scrollArrow" src={scrollDown}/>
            </div>
          </Link>
          <Sky
            images={{
              0: myImage
            }}
            how={100}  /*Pass the number of images Sky will render chosing randomly */
            time={400} /* time of animation */
            size={'40px'} /* size of the rendered images */
          />
        </div>
    )
  }
}
