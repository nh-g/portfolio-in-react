import { getContactIntro } from "../data/aboutMe";
import { getContactInfo } from "../data/contact";

import Grid from "../components/Grid";
import ContactItem from "../components/atoms/ContactItem";

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
