import { Code, Layers, Cloud, Video, Wrench } from 'lucide-react';

const Skills = () => {
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
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Career Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-200 mr-3 mt-1">★</span>
              <p className="text-blue-50">
                Promoted from Associate Software Engineer to Software Developer I based on
                performance and ownership
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-blue-200 mr-3 mt-1">★</span>
              <p className="text-blue-50">
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
