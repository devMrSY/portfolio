import { Code2, Video, Cloud, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const highlights = [
    {
      icon: Video,
      title: 'AI Product Strategy',
      description: 'Shaped product direction for AI-first features and internal workflow tooling',
    },
    {
      icon: Code2,
      title: 'Cross-Functional Execution',
      description: 'Delivered product launches with engineering, design, editorial, and business teams',
    },
    {
      icon: Cloud,
      title: 'Unified Content & Data',
      description: 'Built content discovery and data-driven experiences that connect editorial workflows and customer value',
    },
    {
      icon: Zap,
      title: 'Operational Velocity',
      description: 'Focused on shipping fast, iterating quickly, and scaling end-to-end product workflows',
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
            I'm a product-focused AI operator with 5+ years of hands-on experience turning founder intent into shipped work. I drive unified content, product, and AI initiatives that improve discovery, retention, and internal productivity across fast-moving digital platforms.
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            At GluedIn, I own product delivery for AI-powered workflows, internal tooling, and content experiences that bridge editorial teams with engineering execution. I thrive in ambiguous environments and ship decisions that move millions of users.
          </p>
          <div className={`mt-6 rounded-xl p-5 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
            <p className={`text-sm uppercase tracking-[0.2em] mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Key Strengths
            </p>
            <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <li>End-to-end ownership of product execution, from PRDs and specs to engineering delivery</li>
              <li>AI/LLM feature development using cloud AI services, prompt workflows, and internal automation</li>
              <li>Designed semantic content discovery and unified data-driven product experiences</li>
              <li>Ship-first operations with CI/CD, deployment automation, and monitoring for fast iteration</li>
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
