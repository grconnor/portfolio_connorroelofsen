import React from "react";

const Footer = () => {
  return (
    <footer id="footer-grid">
      <div className="ui container">
        <p id="footer">
          
          <a
            id="footer-url"
            href="https://www.linkedin.com/in/sebastian-niewiadomski-8a65421b7/"
            target="_blank"
          >
            Linkedin 
            <i class="linkedin large icon"></i>{" "}
          </a>
          
          <a
            id="footer-url"
            href="https://github.com/SebastianN97"
            target="_blank"
          >
            GitHub 
            <i class="github large icon"></i>{" "}
          </a>

          <a
            id="footer-url"
            href="https://www.instagram.com/sebbekarsikko/"
            target="_blank"
          >
            Instagram
            <i class="instagram large icon"></i>{" "}
          </a>

        </p>
      </div>
    </footer>
  );
};

export default Footer;
