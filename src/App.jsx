// NPM packages
import { useEffect } from "react";

// project files
import NavigationBar from "./components/NavigationBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects/ProjectsList";
import Skills from "./sections/Skills/SkillsList";
import ContactMe from './sections/Contact/ContactMe';
import Footer from "./components/Footer";
import { keepTheme } from "./utilities/themes";
import "./styles/styles.scss";

export default function App() {
  useEffect(() => {
    keepTheme();
  });
  
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
}
