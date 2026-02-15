import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ModeSelector from './components/ModeSelector';
import VideoJourney from './components/VideoJourney';

function App() {
  const [mode, setMode] = useState<'traditional' | 'video' | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('portfolioMode') as 'traditional' | 'video' | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const handleModeSelect = (selectedMode: 'traditional' | 'video') => {
    setMode(selectedMode);
    localStorage.setItem('portfolioMode', selectedMode);
  };

  if (mode === null) {
    return <ModeSelector onSelectMode={handleModeSelect} />;
  }

  if (mode === 'video') {
    return (
      <>
        <Navigation onModeSwitch={handleModeSelect} currentMode={mode} />
        <VideoJourney />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation onModeSwitch={handleModeSelect} currentMode={mode} />
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
