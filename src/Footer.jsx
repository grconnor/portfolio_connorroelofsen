import React from "react";

const Footer = () => {
  return (
    <footer id="footer-grid">
      <div className="ui container">
        <p id="footer">
          <a
            id="footer-url"
            href="https://www.linkedin.com/in/connor-roelofsen/"
            target="_blank"
          >
            Linkedin
            <i className="linkedin large icon"></i>{" "}
          </a>

          <a id="footer-url" href="https://github.com/grconnor" target="_blank">
            GitHub
            <i className="github large icon"></i>{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
