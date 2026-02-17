import { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import VideoJourney from '../components/VideoJourney';
import { useTheme } from '../contexts/ThemeContext';

function TraditionalView({ onModeSwitch }: { onModeSwitch: (mode: 'traditional' | 'video') => void }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100'}`}>
      <Navigation onModeSwitch={onModeSwitch} currentMode="traditional" />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

const Home = () => {
  const [mode, setMode] = useState<'traditional' | 'video'>('traditional');

  const handleModeSelect = (selectedMode: 'traditional' | 'video') => {
    setMode(selectedMode);
  }

  if (mode === 'video') {
    return <VideoJourney onModeSwitch={handleModeSelect} />;
  }

  return <TraditionalView onModeSwitch={handleModeSelect} />;
};

export default Home;
