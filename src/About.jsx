
import React from "react";
import { UndrawProfilePic } from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawProfilePic primaryColor='black' height='300px'  />
                </div>
                
                <div class="column">
                    <h1 id="about-header" className="ui header">About Me</h1>
                    <p>
                    Hello my name is Sebastian! I should write something here but don't really know yet!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
