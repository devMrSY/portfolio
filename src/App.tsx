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
import { ThemeProvider } from './contexts/ThemeContext';

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
    return (
      <ThemeProvider>
        <ModeSelector onSelectMode={handleModeSelect} />
      </ThemeProvider>
    );
  }

  if (mode === 'video') {
    return (
      <ThemeProvider>
        <VideoJourney onModeSwitch={handleModeSelect} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <Navigation onModeSwitch={handleModeSelect} currentMode={mode} />
        <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
