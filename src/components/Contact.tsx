import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'frankSooraj@gmail.com',
      href: 'mailto:frankSooraj@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9211139060',
      href: 'tel:9211139060',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'South Delhi, India',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/devmrsy/',
      href: 'https://linkedin.com/in/devmrsy/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl shadow-xl p-8 mb-8 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
            <p className={`text-lg text-center mb-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm always open to discussing new opportunities, innovative projects,
              or collaborations. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-blue-50'}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {info.label}
                      </p>
                      <p className={isDark ? 'text-slate-100' : 'text-slate-900'}>{info.value}</p>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:frankSooraj@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Mail size={24} />
              Send Me an Email
            </a>
            <a
              href="https://drive.google.com/file/d/1M_PMEYwuQLYd1qWwm-HnpJa7xVmzxCYL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium ${isDark ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-700 hover:bg-slate-800'}`}
            >
              <Download size={24} className="animate-bounce" />
              Download
            </a>
          </div>

        </div>
      </div>

      <footer className={`mt-20 pt-8 border-t text-center ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
        <p>
          © 2026 Sooraj Yadav. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
