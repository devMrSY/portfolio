import { Film } from 'lucide-react';

export default function VideoJourney() {

  function reset() {
      localStorage.clear();
      window.location.reload();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <Film className="w-32 h-32 text-blue-400 mx-auto mb-6 opacity-50" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Video Journey
        </h1>
        <p className="text-2xl text-blue-200 mb-8">
          Coming Soon
        </p>
        <p className="text-lg text-slate-400 mb-12">
          An immersive video experience showcasing my work, projects, and journey as a Software Engineer II. We're crafting something special for you.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Choose Different Mode
        </button>
      </div>
    </div>
  );
}
