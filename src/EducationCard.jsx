import React from "react";

const EducationCard = ({ education }) => {
  return (
    <>
      <div className="ui main container">
        <div className="column">
          <div className="ui small left floated image" id="education-img">
            <a href={education.web} target="_blank">
              <img src={education.image}></img>
            </a>
          </div>
        </div>
        <div className="column">
          <h2>{education.name} </h2>
        </div>

        <div className="column" id="education-title">
          {education.title}
        </div>
        <div className="column" id="education-description">
          {education.description}
        </div>
        <div className="column" id="education-time">
          {education.time}
        </div>
      </div>
    </>
  );
};
export default EducationCard;
