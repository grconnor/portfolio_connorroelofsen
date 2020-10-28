import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div id="project-card" class="ui card">
        <div class="image">
          <img id="project-image" src={project.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>
          <div id="project-desc" class="description">{project.description}</div>
            
          <a id="project-github" href={project.git} target="_blank">
              <div class="visible content">
                <i class="github large icon"></i>{" "}
              </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
