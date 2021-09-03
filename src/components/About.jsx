import {getAboutMe} from "../data/aboutMe"; 
import Grid from './Grid';

export default function About() {
    const filePath  = "landing/about.png";
    const sectionName="about";
  return (
    <Grid filePath={filePath} getIntro={getAboutMe} sectionName={sectionName} />
  );
}
