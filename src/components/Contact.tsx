import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const Contact = () => {
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
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 text-center mb-8">
              I'm always open to discussing new opportunities, innovative projects,
              or collaborations. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <div className="bg-primary-100 dark:bg-primary-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary-600 dark:text-primary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-slate-900 dark:text-slate-50">{info.value}</p>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Mail size={24} />
              Send Me an Email
            </a>
            <a
              href="https://drive.google.com/file/d/1XlssP3sPQzSSIWu0LwFREBqDog0YT7uo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © 2026 Sooraj Yadav. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
