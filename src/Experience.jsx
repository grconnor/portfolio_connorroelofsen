import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import axios from "axios";

class Experience extends Component {
  state = {
    experience: [],
  };

  componentDidMount() {
    axios.get("src/data/experience.json").then((response) => {
      this.setState({
        experience: response.data,
      });
    });
  }
  
  render() {
    const experience = this.state.experience;
    let experienceList;

    if (experience.length > 0) {
      experienceList = experience.map((experience) => {
        return (
          <div id={"experience-" + experience.id} key={experience.id}>
            <ExperienceCard experience={experience} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable three column grid" id="experience-grid">
          {experienceList}
        </div>
      </div>
    );
  }
}

export default Experience;
