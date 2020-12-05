import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import ComingSoon from "./ComingSoon";
import MainPage from "./MainPage";
// import CV from "./CV";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/myprojects" component={MyProjects}></Route>
        <Route exact path="/contactme" component={ContactMe}></Route>
        <Route exact path="/comingsoon" component={ComingSoon}></Route>
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
