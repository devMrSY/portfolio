import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

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
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-slate-700 text-center mb-8">
              I'm always open to discussing new opportunities, innovative projects,
              or collaborations. Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">
                        {info.label}
                      </p>
                      <p className="text-slate-900">{info.value}</p>
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

          <div className="text-center">
            <a
              href="mailto:frankSooraj@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg font-medium"
            >
              <Mail size={24} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
        <p className="text-slate-600">
          © 2026 Sooraj Yadav. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
