import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
