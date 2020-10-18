import React from "react";

const Hello = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <img id="profile-img" src="img" />
        </div>

        <div class="column">
          <h1 id="hello-header" className="ui header">
            My Portfolio
          </h1>
          <h1>
            Hej jag heter Sebastian Niewiadomski och detta är mitt portfolio!{" "}
            <br></br>
            Här kommer jag presentera lite om mig själv, där ni kan se mina
            projekt och även mitt cv.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hello;

// import React from "react";

// const Hello = () => {
//   return (
//     <div class="ui column grid" id="main-container">
//       <div class="column">
//         <img id="profile-img" src="./src/img/" />
//       </div>
//     </div>
//   );
// };

// export default Hello;
