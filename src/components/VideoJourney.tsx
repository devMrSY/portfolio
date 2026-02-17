import { Film, Moon, Sun, Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface VideoJourneyProps {
  onModeSwitch?: (mode: 'traditional' | 'video') => void;
}

export default function VideoJourney({ onModeSwitch }: VideoJourneyProps) {
  const { theme, toggleTheme } = useTheme();

  const lightTheme = {
    bg: 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100',
    iconColor: 'text-blue-500',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-blue-600',
    textColor: 'text-slate-600',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    buttonSecondaryBg: 'bg-slate-700 hover:bg-slate-800'
  };

  const darkTheme = {
    bg: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
    iconColor: 'text-blue-400',
    titleColor: 'text-white',
    subtitleColor: 'text-blue-300',
    textColor: 'text-slate-400',
    buttonBg: 'bg-blue-600 hover:bg-blue-700',
    buttonSecondaryBg: 'bg-slate-600 hover:bg-slate-700'
  };

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <div className={`min-h-screen ${currentTheme.bg} flex items-center justify-center px-4 relative`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`absolute top-8 right-8 p-3 rounded-lg transition-colors ${theme === 'dark' ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <Film className={`w-32 h-32 ${currentTheme.iconColor} mx-auto mb-6 opacity-50`} />
        </div>
        <h1 className={`text-5xl md:text-6xl font-bold ${currentTheme.titleColor} mb-4`}>
          Video Journey
        </h1>
        <p className={`text-2xl ${currentTheme.subtitleColor} mb-8`}>
          Coming Soon
        </p>
        <p className={`text-lg ${currentTheme.textColor} mb-12`}>
          An immersive video experience showcasing my work, projects, and journey as a Software Engineer II. We're crafting something special for you.
        </p>
        
        {/* Mode Switch Button */}
        {onModeSwitch && (
          <button
            onClick={() => onModeSwitch('traditional')}
            className={`inline-flex items-center gap-2 px-8 py-3 ${currentTheme.buttonSecondaryBg} text-white font-semibold rounded-lg transition-colors duration-300 hover:shadow-lg`}
          >
            <Briefcase size={20} />
            Back to Traditional View
          </button>
        )}
      </div>
    </div>
  );
}
