
import React from "react";
import { UndrawResume } from "react-undraw-illustrations";

const Cv = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawResume primaryColor='black' height='300px'  />
                </div>
                
                <div class="column">

                    <h1 id="cv-header" className="ui header">CV</h1>

                    <h3>Job Experience:</h3>
                        <p>
                        2018 - 2019 	    <br></br>
                        Maskinoperatör: Andrénplast (sommarjobb/extrajobb)
                            <br></br>
                            <br></br>
                        2019 - 2020         <br></br>
                        Teamleader: Andrénplast (sommarjobb/extrajobb)
                        </p>

                        <h3>Education</h3>
                        <p>
                        Grundskola:             	        <br></br>
                        Kunskapsskolan Krokslätt 
                            <br></br>
                            <br></br>
                        Gymnasium:          	            <br></br>
                        Hvitfeldtska gymnasiet              <br></br>                  
                        Natur/Naturvetenskapsprogrammet     <br></br>
                        Extrakurser:                        <br></br>
                        Privatjuridik, Marinbiologi 
                            <br></br>
                            <br></br>
                        Craft Academy:                      <br></br>
                        Full Stack Developer
                        </p>

                        <h3>Language</h3>
                        <p>
                        Svenska, modersmål
                        <br></br>
                        Engelska, advancerad nivå
                        </p>

                </div>
            </div>
        </div>
    );
};

export default Cv;
