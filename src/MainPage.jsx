import React from "react";

const MainPage = () => {
  return (
    <>
      <div id="mainpage-container" className="ui main container">
        <div className="column">
          <h1 id="about-header" className="ui header">
            Junior Software Developer living in Stockholm, Sweden
          </h1>
          <br></br>

          <p>
            I recently graduated from Craft Academy where I had been working in a fast 
            paced environment, on modern applications and real life situations. <br></br>
            Working with a BDD (behaviour Driven Development), TDD (Test Driven Development) and Agile approach during development as it sets the foundation for the application at hand.<br></br>
            Love meeting new people, passing on my knowledge, learning new techknowlogies and perfecting my technological way of thinking and working.<br></br>
            It is often said about me that I'm driven, flexible/mendable,communicative and skilled in problem solving and research.
          </p>

          <br></br>

          <h1>
            My Main Languages and Frameworks: 
          </h1>
          <p>
            Ruby, Javascript, HTML, CSS,
            React, React Native, Ruby on Rails, Node JS,
            Cypress, RSpec, Jest, Enzyme.
          </p>
        </div>
      </div>
      <div class="column">
      <img
        id="profile-img"
        src="../src/display.jpg"
        height="350"
        length="200"
      />
    </div>
  </>
  );
};

export default MainPage;
