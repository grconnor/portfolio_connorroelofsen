import React from "react";

const Hello = () => {
  return (
    <div id="hello-container" className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <img
            id="profile-img"
            src="https://scontent.fgse1-1.fna.fbcdn.net/v/t1.0-9/41841661_1784413611607957_6140001739312463872_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=nqUJ4-WLKZIAX9W2sVK&_nc_ht=scontent.fgse1-1.fna&oh=6af63e8bdbf21b3baa221d5abd05d156&oe=5FE1A2BE"
          />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">
            Junior Software Developer based in Gothenburg, Sweden
          </h1>
          <br></br>
          <p>
            Hej mitt namn är Sebastian, är 23 år gammal och är en väldigt aktiv
            och social person. Jag bor i Västra Eriksberg. Är väldigt hjälpsam,
            bra på sammarbete och håller alltid mina tider. Jag är en väldigt
            öppen person och lätt att prata med, älskar att träffa nytt folk.
          </p>
          <h1>
            Working with
          </h1>
          <p>
            JavaScript, React, React Native,
            Ruby, Ruby on Rails, 
            HTML, CSS, 
            RSpec, Cypress
          </p>
          <div class="column">
            <img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
            <img align="left" alt="React" width="26px" src="https://img.icons8.com/plasticine/100/000000/react.png" />
           
            <img align="left" alt="Ruby" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png" />
            <img align="left" alt="Rails" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png" />
            <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
            <img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
            <img align="left" alt="RSpec" width="26px" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_rspec_icon_130188.png" />
            <img align="left" alt="Cypress" width="26px" src="https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/cypress.iconset/icon_32x32.png"/>
          </div>
        </div>
        <div class="column" id="words-box">
          <p id="three-words">
            Ambitious - Dependable - Leadership
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
