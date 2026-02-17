import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Sooraj Yadav
          </h1>
          <p className={`text-xl sm:text-2xl lg:text-3xl ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-6`}>
            Software Engineer II
          </p>
          <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-8">
            Full Stack – AI & Video Platforms
          </p>

          <div className={`flex flex-wrap justify-center items-center gap-4 mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>South Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>9211139060</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="mailto:frankSooraj@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/devmrsy/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-700 text-white hover:bg-slate-800'}`}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="animate-bounce mt-12">
            <button
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`transition-colors ${isDark ? 'text-slate-500 hover:text-slate-400' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
