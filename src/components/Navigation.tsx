import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  onModeSwitch?: (mode: 'traditional' | 'video') => void;
  currentMode?: 'traditional' | 'video';
}

const Navigation = ({ onModeSwitch, currentMode }: NavigationProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrolledBg = theme === 'dark'
    ? 'bg-slate-900/90 backdrop-blur-md shadow-md'
    : 'bg-white/90 backdrop-blur-md shadow-md';
  
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-800';
  const linkColor = theme === 'dark' ? 'text-slate-400 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600';
  const buttonBg = theme === 'dark' ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300';
  const mobileMenuBg = theme === 'dark' ? 'bg-slate-900/95 backdrop-blur-md border-slate-800' : 'bg-white/95 backdrop-blur-md border-t';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? scrolledBg : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('#hero')}
            className={`text-xl font-bold ${textColor} hover:text-blue-600 transition-colors`}
          >
            SY
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`${linkColor} transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {currentMode === 'traditional' && onModeSwitch && (
              <button
                onClick={() => onModeSwitch('video')}
                className={`text-sm px-3 py-1 ${buttonBg} rounded-full transition-colors font-medium`}
              >
                Video Mode
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${mobileMenuBg}`}>
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left ${linkColor} transition-colors font-medium py-2`}
              >
                {item.label}
              </button>
            ))}
            {currentMode === 'traditional' && onModeSwitch && (
              <button
                onClick={() => onModeSwitch('video')}
                className={`block w-full text-left ${linkColor} transition-colors font-medium py-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800`}
              >
                Switch to Video Mode
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
