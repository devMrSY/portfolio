import { useEffect, useState } from 'react';
import { Download, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    if (hasDownloaded) {
      return undefined;
    }

    const delays = [5000, 20000];
    const timers = delays.map((delay) =>
      window.setTimeout(() => {
        if (!hasDownloaded) {
          setIsResumeOpen(true);
        }
      }, delay),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [hasDownloaded]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} mb-3`}>
            Sooraj Yadav
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-3`}>
            Full-Stack Engineer – Applied GenAI
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-blue-600 dark:text-blue-400 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Building & Owning End-to-End Scalable Systems, Products & Cloud Architectures
          </p>

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

      {isResumeOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:py-8 bg-black/60 backdrop-blur-sm animate-modal-backdrop"
          onClick={() => setIsResumeOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume download"
        >
          <div
            className={`w-full max-w-md rounded-2xl sm:rounded-2xl rounded-t-3xl p-5 sm:p-6 shadow-2xl border animate-modal-card ${isDark ? 'bg-slate-900 text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
                  Resume
                </div>
                <p className={`mt-3 text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Grab the resume in one click
                </p>
                <p className={`mt-1 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Recruiters usually ask for it first. Download it now.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsResumeOpen(false)}
                className={`rounded-full p-2 text-sm transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://drive.google.com/file/d/1M_PMEYwuQLYd1qWwm-HnpJa7xVmzxCYL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setHasDownloaded(true);
                  setIsResumeOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 shadow-[0_0_24px_rgba(251,191,36,0.45)] animate-pulse"
              >
                <Download size={22} className="animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Hero;
