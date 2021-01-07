import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import MainPage from "./MainPage";
import PdfViewer from "./PdfViewer";
import { Button } from "antd";
import pdf from "./pdf.pdf";
import "./App.css";

const App = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/myprojects" component={MyProjects}></Route>
        <Route exact path="/contactme" component={ContactMe}></Route>
        <Route exact path="/pdfviewer" component={PdfViewer}></Route>
      </Switch>
      <div className="App">
        <PdfViewer
          file={pdf}
          onCancel={() => setShowPdf(false)}
          visible={showPdf}
        ></PdfViewer>
        <Button onClick={() => setShowPdf(!showPdf)}>Show CV</Button>
      </div>
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
