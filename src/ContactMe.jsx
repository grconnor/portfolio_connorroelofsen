import React from "react";
import { UndrawAddUser } from "react-undraw-illustrations";

const ContactMe = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawAddUser primaryColor="black" height="300px" />
        </div>

        <div className="column">
          <h1 id="contactme-header" className="ui header">
            Contact Me
          </h1>
          <br></br>
          <p>
            <b>Name:</b> Connor Roelofsen <br></br>
            <b>Phone: </b>0764010442 <br></br>
            <b>Email:</b> connorroelofsen15@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
