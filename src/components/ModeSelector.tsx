import { Film, Briefcase, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ModeSelectorProps {
  onSelectMode: (mode: 'traditional' | 'video') => void;
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'} flex items-center justify-center px-4 relative`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`absolute top-8 right-8 p-3 rounded-lg transition-colors ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-800/50 backdrop-blur text-blue-100 hover:bg-slate-800'}`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Explore My Journey
          </h1>
          <p className="text-xl md:text-2xl text-blue-200">
            Choose how you'd like to experience my portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div
            onClick={() => onSelectMode('traditional')}
            className="group cursor-pointer"
          >
            <div className={`relative overflow-hidden rounded-2xl h-96 ${isDark ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-blue-600 to-blue-800'} shadow-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2`}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Briefcase className="w-24 h-24 text-blue-100 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h2 className="text-4xl font-bold text-white mb-3 text-center">
                  Traditional
                </h2>
                <p className="text-blue-100 text-center text-lg px-6">
                  Classic portfolio experience with clean sections
                </p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
            <div className="mt-6 text-center">
              <button
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/50"
              >
                Select Traditional
              </button>
            </div>
          </div>

          <div
            onClick={() => onSelectMode('video')}
            className="group cursor-pointer"
          >
            <div className={`relative overflow-hidden rounded-2xl h-96 ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-600 to-slate-800'} shadow-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 opacity-75`}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Film className="w-24 h-24 text-slate-300 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h2 className="text-4xl font-bold text-white mb-3 text-center">
                  Video Journey
                </h2>
                <p className={`text-center text-lg px-6 ${isDark ? 'text-slate-400' : 'text-slate-300'}`}>
                  Interactive video experience (Coming Soon)
                </p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl font-bold ${isDark ? 'bg-slate-900/90 text-slate-300' : 'bg-slate-900/80 text-slate-400'} px-8 py-3 rounded-lg`}>
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                disabled
                className={`px-8 py-3 ${isDark ? 'bg-slate-700 text-slate-400' : 'bg-slate-600 text-slate-300'} font-semibold rounded-lg cursor-not-allowed opacity-50`}
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400">
          <p className="text-sm">
            You can change this anytime using the mode switcher in the header
          </p>
        </div>
      </div>
    </div>
  );
}
