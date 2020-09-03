
import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";
import UndrawDesigner from "react-undraw-illustrations";

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawDesignerLife />
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
