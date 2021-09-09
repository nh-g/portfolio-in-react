import { getHero } from "../data/aboutMe";
import Grid from "../components/Grid";

export default function Hero() {
  const filePath = "landing/hero.png";
  const sectionName = "hero";

  return (
    <Grid sectionName={sectionName} getIntro={getHero} filePath={filePath} />
  );
}
