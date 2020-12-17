import React, { Component } from 'react';
import backArrow from './left-arrow.png';
import './FishbowlProject.css';
import * as Scroll from 'react-scroll';
import { withRouter } from 'react-router-dom';
import fishbowlSS from "./fishbowlSS.png";




class FishbowlProject extends Component {
  render() {

    return(
        <div className="main-fishbowl">
          <button className="backArrow animate-left-to-right" onClick={() => this.props.history.goBack()}>
            <img className="arrowImage" src={backArrow}/>
          </button>
          <body class="body-description">
            <h1 className="pageTitle-fishbowl">
              fishbowl
            </h1>
            <div className="description">
              <div>
                <img className="fishbowlSS" src={fishbowlSS} />
              </div>
              <div className="description-text">
                <p>
                  This web app was created during quarantine - a time of self reflection and virtual connections. The idea stemmed
                  from my immediate family's dinner table conversations. We had written down various topics and questions and put them
                  in a bowl (aka fishbowl) in the center of the table. Every night we would pick out a topic and discuss it/answer the
                  question. In an effort to involve the rest of my family in this, I decided to create an online version of it.
                </p>
                <p>
                  Users are able to create topics that get posted on the main board for everyone to see. Each topic/question can be
                  clicked on to see everyone's answers. Users can interact with each other via the comments and discuss their answers.
                </p>
                <p>
                  This app follows the MERN architecture - <strong>MongoDB, Express, React, and Node.Js</strong>
                </p>
              </div>
            </div>
          </body>
        </div>

    );
  }
}

export default withRouter(FishbowlProject)
