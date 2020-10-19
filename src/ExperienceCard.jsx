import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <div class="ui main container">
        <div class="column">
          <div class="ui small left floated image" id="experience-img">
            <a href={experience.web} target="_blank">
              <img src={experience.image}></img>
            </a>
          </div>
        </div>
        <div class="column">
          <h2>{experience.name} </h2>
        </div>

        <div class="column" id="experience-title">
          {experience.title}
        </div>
        <div class="column" id="experience-description">
          {experience.description}
        </div>
        <div class="column" id="experience-time">
          {experience.time}
        </div>
      </div>
    </>
  );
};
export default ExperienceCard;
