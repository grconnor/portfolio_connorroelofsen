
import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";
import { UndrawResume  } from "react-undraw-illustrations";

class Cv extends Component {
    state = {
        cv: [],
    };

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(Response => {
                this.setState({
                    cv: Response.data
                })
            })
    }

    render() {
        const cv = this.state.cv;
        let cvList;

        if (cv.length > 0) {
        cvList = cv.map((cv) => {
            return (
                <div id={"cv-" + cv.id} key={cv.id}>
                    <CvCard cv={cv}/>
                </div>
            );
        });
    }
        return (
            <div className="ui main container">
                <div className="ui stackable two column grid">
                    <div className="column">
                        <UndrawResume primaryColor='black' height='300px' />
                    </div>
                    <div className="column">


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
                        Engelska, Utan problem
                        </p>

                    </div>
                </div>
                <div className= "ui stackable four column grid"> {cvList} </div>
            </div>           
        );
    }
}

export default Cv;
