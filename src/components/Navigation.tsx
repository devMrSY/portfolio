import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onModeSwitch?: (mode: 'traditional' | 'video') => void;
  currentMode?: 'traditional' | 'video';
}

const Navigation = ({ onModeSwitch, currentMode }: NavigationProps) => {
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
          >
            SY
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            {currentMode === 'traditional' && onModeSwitch && (
              <button
                onClick={() => onModeSwitch('video')}
                className="text-sm px-3 py-1 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors font-medium"
              >
                Video Mode
              </button>
            )}
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            {currentMode === 'traditional' && onModeSwitch && (
              <button
                onClick={() => onModeSwitch('video')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 mt-4 pt-4 border-t"
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
