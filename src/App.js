import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import Container from 'react-bootstrap/Container';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import FishbowlProject from './components/FishbowlProject.js';
import TomeProject from './components/TomeProject.js';
import Doodles from './components/Doodles.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/fishbowl" exact component={FishbowlProject} />
        <Route path="/tome" exact component={TomeProject} />
        <Route path="/doodles" exact component={Doodles} />
      </Switch>
  </HashRouter>
  );
}

export default App;
