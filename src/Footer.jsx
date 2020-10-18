import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui container">
        <p id="footer">
          <a
            id="footer-url"
            href="https://www.linkedin.com/in/sebastian-niewiadomski-8a65421b7/"
            target="_blank"
          >
            <i class="linkedin large icon"></i>{" "}
          </a>
          | Sebastian Niewiadomski 2020 |
          <a
            id="footer-url"
            href="https://github.com/SebastianN97"
            target="_blank"
          >
            <i class="github large icon"></i>{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
