import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const experiences = [
    {
      title: 'Software Engineer II',
      subtitle: 'Full Stack – AI & Video Systems',
      company: 'GluedIn – In-App Content & Community SaaS Platform',
      location: 'Gurugram',
      period: 'Feb 2024 – Present',
      highlights: [
        'Led development of AI-powered video intelligence pipelines to analyze, classify, and enrich video content using cloud AI and LLMs',
        'Built end-to-end video processing workflows where raw media is ingested, analyzed, and returned as structured, reusable assets',
        'Designed content decisioning systems that automatically determine required transformations based on video context',
        'Integrated AWS Rekognition and GCP Speech-to-Text to extract visual labels, scenes, and audio intelligence',
        'Migrated legacy Java-based media services to Node.js microservices, improving performance and scalability',
      ],
      technologies: ['AWS', 'GCP', 'Node.js', 'NestJS', 'React', 'FFmpeg', 'Docker', 'LLM Integrations'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Creative Hustlers',
      location: 'Gujarat',
      period: 'Mar 2023 – Feb 2024',
      highlights: [
        'Developed and enhanced backend services using Node.js and NestJS',
        'Strengthened authentication and authorization systems to secure user data',
        'Implemented real-time video streaming using Agora SDK',
        'Integrated real-time chat functionality using Socket.io',
        'Designed responsive user interfaces using React and Material-UI',
      ],
      technologies: ['React.js', 'Node.js', 'NestJS', 'MongoDB', 'Agora SDK', 'Socket.io'],
    },
    {
      title: 'Software Developer I',
      company: 'Softsages',
      location: 'Noida',
      period: 'Jan 2022 – Mar 2023',
      highlights: [
        'Led UI and product development including the \'Glyde Xperience\' platform',
        'Implemented internationalization (i18n) and responsive UI using Material-UI',
        'Developed backend services and middleware using Node.js and Express',
        'Integrated Stripe payment gateway and maintained API test collections',
      ],
      technologies: ['Node.js', 'Express', 'React.js', 'MongoDB', 'TypeScript', 'Stripe'],
    },
    {
      title: 'Associate Software Engineer',
      subtitle: 'Front-End',
      company: 'Tech Superiors Consulting',
      location: 'Gurugram',
      period: 'Jan 2021 – Dec 2021',
      highlights: [
        'Built responsive UI components using React, Bootstrap, and React-Bootstrap',
        'Managed Redux-based state management and CRUD operations',
        'Integrated external APIs using Axios and implemented secure routing',
        'Performed end-to-end manual testing to ensure product quality',
      ],
      technologies: ['React.js', 'TypeScript', 'Redux', 'Bootstrap'],
    },
  ];

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {exp.title}
                  </h3>
                  {exp.subtitle && (
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.subtitle}</p>
                  )}
                  <p className={`text-lg font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Briefcase className="inline mr-2" size={18} />
                    {exp.company}
                  </p>
                </div>
                <div className={`flex flex-col gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
