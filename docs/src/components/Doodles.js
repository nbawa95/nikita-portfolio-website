import React, { Component } from 'react';
import backArrow from './left-arrow.png';
import './Doodles.css';
import * as Scroll from 'react-scroll';
import { withRouter } from 'react-router-dom';
import blueGirlDoodle from "./blueGirlDoodle.jpg";
import fallDoodle from "./fallDoodle.jpg";
import mountainsDoodle from "./mountainsDoodle.jpg";

class Doodles extends Component {
  render() {

    return(
        <div className="main-doodles">
          <button className="backArrow animate-left-to-right" onClick={() => this.props.history.goBack()}>
            <img className="arrowImage" src={backArrow}/>
          </button>
          <body class="body-description-doodles">
            <h1 className="pageTitle-doodles">
              doodles
            </h1>
            <div className="description-doodles">
            <div className="description-text-doodles">
              <p>
                Check out some of the doodles I've done recently. All of these have been done on Procreate using an iPad. Some
                are my own creations and some have been inspired by images and graphics I have come across.
              </p>
            </div>
              <div>
                <img className="doodleImage" src={blueGirlDoodle} />
              </div>
              <div>
                <img className="doodleImage" src={fallDoodle} />
              </div>
              <div>
                <img className="doodleImage" src={mountainsDoodle} />
              </div>
            </div>
          </body>
        </div>

    );
  }
}

export default withRouter(Doodles)
