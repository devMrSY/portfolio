import { Code, Layers, Cloud, Video, Wrench } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'JSX', 'Python', 'Java 8'],
    },
    {
      icon: Layers,
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'Angular', 'Next.js', 'Material-UI', 'Bootstrap'],
    },
    {
      icon: Layers,
      title: 'Backend',
      skills: ['Node.js', 'NestJS', 'Express.js', 'Spring Boot'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Jenkins', 'Docker'],
    },
    {
      icon: Video,
      title: 'Media & AI',
      skills: ['FFmpeg', 'LLM Integrations', 'Video Intelligence Pipelines'],
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'Jira', 'ClickUp', 'Bitbucket', 'Confluence', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-800' : 'bg-white'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-blue-900 hover:text-blue-300' : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 rounded-2xl p-8 shadow-xl ${isDark ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-slate-50' : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'}`}>
          <h3 className="text-2xl font-bold mb-4">Career Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className={`mr-3 mt-1 ${isDark ? 'text-blue-300' : 'text-blue-200'}`}>★</span>
              <p className={isDark ? 'text-slate-200' : 'text-blue-50'}>
                Promoted from Associate Software Engineer to Software Developer I based on
                performance and ownership
              </p>
            </div>
            <div className="flex items-start">
              <span className={`mr-3 mt-1 ${isDark ? 'text-blue-300' : 'text-blue-200'}`}>★</span>
              <p className={isDark ? 'text-slate-200' : 'text-blue-50'}>
                Promoted to Software Engineer II for leading AI-driven video platform initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
