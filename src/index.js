import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import Cv from "./Cv";
import Contact from "./Contact";
import Experience from './Experience'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={Cv}></Route>
        <Route exact path="/experience" component={Experience}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
