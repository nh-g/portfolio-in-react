import { getProjects } from "../data/projects";
import { getProjectsIntro } from "../data/aboutMe"; 

import Grid from "../components/Grid";
import ProjectCard from "../components/atoms/ProjectCard";

export default function Projects() {
  return (
    <Grid
      getIntro={getProjectsIntro}
      sectionName={"projects"}
      getData={getProjects()}
      Component={ProjectCard}
    />
  );
}
