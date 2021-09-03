import { getTechnologies } from "../data/technologies";
import { getSkillsIntro } from "../data/aboutMe";

import Grid from "../components/Grid";
import Skill from "../components/atoms/Skill";

export default function SkillsList() {
  return (
    <Grid
      getIntro={getSkillsIntro}
      sectionName={"technologies"}
      getData={getTechnologies()}
      Component={Skill}
    />
  );
}
