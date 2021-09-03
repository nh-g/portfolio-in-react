import { getProjects } from "../data/projects";
import { getProjectsIntro } from "../data/aboutMe"; 

import Grid from "./Grid";
import ProjectCard from "./atoms/Card";

export default function Projects() {
  console.log("Project Data", getProjects);
  return (
    <Grid
      getIntro={getProjectsIntro}
      sectionName={"projects"}
      getData={getProjects()}
      Component={ProjectCard}
    />
  );
}
