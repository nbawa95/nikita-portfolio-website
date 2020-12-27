import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectCard from "./ProjectCard";
import './Projects.css';
import * as Scroll from 'react-scroll';
import { Parallax, Background } from "react-parallax";


let Link = Scroll.Link;


export default class Projects extends Component {
  render() {
    return(
        <div className="main-projects">
          <div className="pageTitle-projects">
            projects
          </div>
          <div className="projectsContainer">
            <a href='#/fishbowl'>
              <ProjectCard
                title="fishbowl"
                shortDescription="a quarantine project to connect my family from around the world"
                longDescription="insert long description here"
              />
            </a>
            <a href='#/tome'>
              <ProjectCard
                title="tome"
                shortDescription="an interactive topic modelling visualization"
                longDescription="insert long description here"
              />
            </a>
            <a href='#/doodles'>
              <ProjectCard
                title="digital art"
                shortDescription="check out some of my doodles"
                longDescription="insert long description here"
              />
            </a>
          </div>
        </div>
    );
  }
}
