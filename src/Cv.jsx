
import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";
import { UndrawDashboard } from "react-undraw-illustrations";

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
                        <UndrawDashboard primaryColor='black' height='300px' />
                    </div>
                    <div className="column">
                        <h1 id="cv-header" className="ui header">CV</h1>
                        <p>This is my CV</p>
                    </div>
                </div>
                <div className= "ui stackable four column grid"> {cvList} </div>
            </div>           
        );
    }
}

export default Cv;

