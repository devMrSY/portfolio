import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-slate-700 font-medium mb-3">
                  HMR Institute of Technology & Management, GGSIPU
                </p>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={18} />
                  <span className="font-medium">2017 – 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
