
import React from "react";
import { UndrawStartupLife } from "react-undraw-illustrations";

const Hello = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawStartupLife primaryColor='black' height='300px'  />
                </div>
                
                <div class="column">
                    <h1 id="hello-header" className="ui header">Hello World</h1>

                </div>
            </div>
        </div>
    );
};

export default Hello;
