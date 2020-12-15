import React, { Component } from 'react';
import backArrow from './left-arrow.png';
import './TomeProject.css';
import * as Scroll from 'react-scroll';
import tomeSS from "./tomeSS.png";
import { withRouter } from 'react-router-dom';

class TomeProject extends Component {
  render() {

    return(
        <div className="main-tome">
          <button className="backArrow animate-left-to-right" onClick={() => this.props.history.goBack()}>
            <img className="arrowImage" src={backArrow}/>
          </button>
          <body class="body-description-tome">
            <h1 className="pageTitle-tome">
              tome
            </h1>
            <div className="description-tome">
              <div>
                <img className="tomeSS" src={tomeSS} />
              </div>
              <div className="description-text-tome">
                <p>
                  TOME (TOpic Model and MEtadata Visualization) is a tool for humanities scholars, designed as an entrypoint into large collections of digitized text.
                  It rests upon the technique of topic modeling, a machine learning technique for automatically identifying a
                  set of topics--or themes--in a document set. I worked with Dr. Lauren Klein from the Digital Humanities lab at
                  Georgia Tech for this project.
                </p>
                <p>
                  My part in this project was to handle the topic generation portion of it. Our corpus consists of over 300,000
                  documents drawn from a collection of nineteenth-century newspapers, focusing on issues including abolition and
                   women’s rights. I used <strong>Gensim</strong>, the vector space and topic modeling library, to extract a topic model of the corpus.
                  Specifically, I employed gensim’s wrapper for <strong>Latent Dirichlet Allocation (LDA)</strong> from MALLET and generated 100
                  topics after 100 iterations, filtering the 100 most common words. These topics and topical compositions for each
                   document were printed to CSV files and then ingested into a MySQL database using Django’s ORM framework.
                </p>
                <p>
                  This project was presented at the Digital Humanities conference in Mexico City in 2018. Read about it <a className="tomeLink" target="_blank" href="https://dh2018.adho.org/en/tome-a-topic-modeling-tool-for-document-discovery-and-exploration/">here.</a>
                </p>
              </div>
            </div>
          </body>
        </div>

    );
  }
}

export default withRouter(TomeProject)
