import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import axios from "axios";

class Experience extends Component {
  state = {
    experience: [],
    education: [],
  };

  componentDidMount() {
    axios.get("src/data/experience.json").then((response) => {
      this.setState({
        experience: response.data,
      });
    });
    axios.get("src/data/education.json").then((response) => {
      this.setState({
        education: response.data,
      });
    });
  }

  render() {
    const experience = this.state.experience;
    const education = this.state.education;
    let experienceList;
    let educationList;

    if (experience.length > 0) {
      experienceList = experience.map((experience) => {
        return (
          <div id={"experience-" + experience.id} key={experience.id}>
            <ExperienceCard experience={experience} />
          </div>
        );
      });
    }

    if (education.length > 0) {
      educationList = education.map((education) => {
        return (
          <div id={"education-" + education.id} key={education.id}>
            <EducationCard education={education} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container" id="cv-grid">
        <h1 id="work-title">Work Experience</h1>
        <div className="ui stackable three column grid" id="experience-grid">
          {experienceList}
        </div>
        <h1 id="speedy-title">Education</h1>
        <div className="ui stackable three column grid" id="education-grid">
          {educationList}
        </div>
        <h3 id="last-update">Last time updated: 2020-11-24</h3>
      </div>
    );
  }
}

export default Experience;
