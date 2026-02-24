import { Code2, Video, Cloud, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    {
      icon: Video,
      title: 'Video Intelligence',
      description: 'Expert in building AI-powered video processing pipelines',
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in React, Node.js, and modern web technologies',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Experience with AWS and GCP for scalable solutions',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Specialized in building high-performance, scalable systems',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          About Me
        </h2>

        <div className={`rounded-2xl shadow-xl p-8 mb-12 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
          <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            I'm a full-stack Software Engineer with 5+ years of experience in React and Node.js,
            specializing in AI-powered video intelligence and cloud-based platforms. At GluedIn, I lead
            AI-driven features that automate content understanding, moderation, and enrichment using LLMs
            and cloud AI services.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            My expertise spans full-stack product ownership, LLM integrations, embedding-based search, and
            scalable cloud architectures. I've been promoted twice based on performance and ownership, most
            recently to Software Engineer II for leading AI-driven video platform initiatives.
          </p>
          <div className={`mt-6 rounded-xl p-5 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
            <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Key Strengths
            </p>
            <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <li>End-to-end ownership across React frontends and Node.js/NestJS backends</li>
              <li>AI/LLM feature development using cloud AI services and LLM-based workflows</li>
              <li>Embedding extraction and semantic search workflows for accurate matching results</li>
              <li>CI/CD delivery with Jenkins, Dockerized services, and production monitoring</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-slate-800' : 'bg-white'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                  <Icon size={24} />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {highlight.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
