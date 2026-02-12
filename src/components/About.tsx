import { Code2, Video, Cloud, Zap } from 'lucide-react';

const About = () => {
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
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a passionate Software Engineer with over 4 years of experience in full-stack development,
            specializing in AI-powered video intelligence and cloud-based platforms. Currently working at
            GluedIn, I lead the development of cutting-edge video processing pipelines that leverage machine
            learning and cloud AI services.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            My expertise spans across modern web technologies, video processing systems, and scalable
            cloud architectures. I've been promoted twice based on performance and ownership, most recently
            to Software Engineer II for leading AI-driven video platform initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
