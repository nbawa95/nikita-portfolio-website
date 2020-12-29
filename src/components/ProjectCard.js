import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './ProjectCard.css';
import { Parallax, Background } from "react-parallax";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Parallax
        strength={50}
        className="parallaxContainer"
        style={{
          width: "100%",
          height: "80%"
        }}
        renderLayer={(percentage) => (
          <div>
            <div
              className="parallaxRender"
              style={{
                position: "absolute",
                background: `rgba(255, 93, 115, ${percentage * 1.5})`,
                left: "50%",
                top: "50%",
                borderRadius: "0%",
                transform: "translate(-50%,-50%)",
                width: percentage * 600,
                height: percentage * 600,
                boxShadow: "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            />
          </div>
        )}
      >
      <div className="projectCard">
        <div className="projectCardDiv">
          <h2>{this.props.title}</h2>
          <p>{this.props.shortDescription}</p>
        </div>
      </div>
      </Parallax>
    );
  }
}
