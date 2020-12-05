import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./MyProjectCard";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./src/data/projects.json").then((Response) => {
      this.setState({
        projects: Response.data,
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }
    return (
      <div class="span9">
        <div class="hero-unit">
          <h1 id="projects-heading">Hi there,</h1>
          <p>
            Below are all my recent projects I've been working on / contributed
            towards. Feel free to visit by GitHub!
          </p>
          <a href="www.github.com/grconnor" class="btn btn-primary brn-large">
            Github
          </a>
        </div>
        <div class="row-fluid">
          <div class="span4">{projectsList}</div>

          <div class="span4">{projectsList}</div>

          <div class="span4">{projectsList}</div>
        </div>
      </div>

      // <div class="row-fluid">
      //   <div class="span9">
      //     <h1 id="projects-header" class="hero-unit">
      //       Projects I've worked on over the past 6 months.
      //     </h1>
      //     <a href="www.github.com/grconnor" class="btn btn-primary btn-large">Visit my Github</a>
      //     <div class="row-fluid">
      //       <div class="span4"> {projectsList} </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Projects;
