import { Languages as LanguagesIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Languages = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const languages = [
    { name: 'Hindi', level: 'Proficient' },
    { name: 'English', level: 'Proficient' },
  ];

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Languages
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                <LanguagesIcon size={28} />
              </div>
              <div className="flex-1 space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{language.name}</span>
                    <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
