import Hero from './components/Hero'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import './styles/styles.scss'
export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Hero />
        <About/>
      </div>
    </div>
  );
}


