import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './About.css';
import resume from './resume2020.pdf';

export default class About extends Component {
  render() {
    return(
        <div className="main">
          <div className="pageTitle">
            about
          </div>
          <div className="aboutContainer">
            <h2>a little bit about me..</h2>
            <p>
              I have a Bachelors of Science in Computer Science from the University of Georgia Tech. During my time there,
              I concentrated in the areas of People and Intelligence. I also held a Teaching Assistant role for a Python
              class and was an undergraduate research assistant for a project which explored Topic Modelling. In the summer
              of 2017 I interned at a startup called Flipboard in the Bay Area where I worked on their ads recommendation model.
            </p>
            <p>
              I currently hold a Full Stack engineering role at J.P. Morgan where I have found my love for front end development
              and all things design. I love how front end brings together engineering and creativity. I have been involved in
              creating various web applications in both React and Angular.
            </p>
            <p>
              In my spare time I love to doodle, paint, read, and try out new coffee shops.
            </p>
            <a href={resume} target='_blank' className="resumeButton">Take a look at my resume!</a>
          </div>
        </div>
    );
  }
}
