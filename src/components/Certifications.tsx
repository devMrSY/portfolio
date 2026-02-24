import { BadgeCheck } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Certifications = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Certification
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                <BadgeCheck size={28} />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  MEAN Stack Summer Training
                </h3>
                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Completed summer training in MEAN Stack technology and delivered a project named Koncept Interior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
