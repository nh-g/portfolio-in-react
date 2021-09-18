import { getTechnologies } from "../../data/technologies";
import { getSkillsIntro } from "../../data/introTexts";

import Grid from "../../components/Grid";
import SkillItem from "./SkillItem";

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
