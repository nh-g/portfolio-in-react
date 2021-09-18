import { getContactIntro } from "../../data/introTexts";
import { getContactInfo } from "../../data/contact";

import Grid from "../../components/Grid";
import ContactItem from "./ContactItem";

export default function ContactMe() {
  return (
    <Grid
      getIntro={getContactIntro}
      sectionName={"contact"}
      getData={getContactInfo()}
      Component={ContactItem}
    />
  );
}
