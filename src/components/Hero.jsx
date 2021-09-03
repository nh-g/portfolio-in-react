import { getHero } from "../data/aboutMe";
import Grid from "./Grid";

export default function Hero() {
  const filePath = "landing/hero.png";
  return <Grid filePath={filePath} getData={getHero} sectionName={"hero"}/>;
}
