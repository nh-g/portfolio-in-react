import { getTechnologies } from "../data/technologies";
import { getSkillsIntro } from "../data/aboutMe";

import Grid from "../components/Grid";
import SkillItem from "../components/atoms/SkillItem";

export default function SkillsList() {
  return (
    <Grid
      getIntro={getSkillsIntro}
      sectionName={"technologies"}
      getData={getTechnologies()}
      Component={SkillItem}
    />
  );
}
