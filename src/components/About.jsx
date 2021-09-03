import {getAboutMe} from "../data/aboutMe"; 
import Grid from './Grid';

export default function About() {
    const filePath = "landing/about.png";
  return <Grid filePath={filePath} getData = {getAboutMe} sectionName={"about"}/>;
}
