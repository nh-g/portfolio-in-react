import NavigationBar from "./components/NavigationBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/ProjectsList";
import Skills from "./sections/SkillsList";

import "./styles/styles.scss";
export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Hero />
        <About />
        <Projects />
        <Skills/>
      </div>
    </div>
  );
}
