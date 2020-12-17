import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './ProjectCard.css';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="projectCard">
        <div className="projectCardDiv">
          <h2>{this.props.title}</h2>
          <p>{this.props.shortDescription}</p>
        </div>
      </div>
    );
  }
}
