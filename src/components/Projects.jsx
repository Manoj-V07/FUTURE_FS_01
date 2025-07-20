import Cinemate from '../assets/cinemate.png'
import Weather from '../assets/weather.png'
import Ignite from '../assets/ignite.jpg'

const Projects = () => {
  const projectData = [
    {
      title: "Business Analytics Dashboard",
      description: "Visualizes key metrics using interactive charts and graphs to help users interpret and monitor data trends effectively.",
      tech: ["React", "Tailwind"],
      image: Ignite,
      github: "https://github.com/Manoj-V07/TaskIgnite",
      live: "https://task-ignite.vercel.app"
    },
    {
      title: "Weather App",
      description: "Displays real-time, location-based weather updates with a clean and responsive UI.",
      tech: ["React", "Tailwind CSS"],
      image: Weather,
      github: "https://github.com/Manoj-V07/WeatherApp",
      live: "https://weather-app-beta-bice-14.vercel.app"
    },
    {
      title: "Cinemate",
      description: "A curated movie discovery platform that allows users to browse films, read reviews, and rate content — delivering a personalized entertainment experience.",
      tech: ["React", "Tailwind CSS"],
      image: Cinemate,
      github: "https://github.com/Manoj-V07/cinemate",
      live: "https://cinemate-sigma.vercel.app"
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 pt-12 pb-8 bg-slate-800 text-slate-50">
      <h1 className="text-center text-slate-50 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-10">
        ✨MY PROJECTS✨
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
          data-aos = "fade-left"
            key={index}
            className="bg-slate-800 rounded-2xl hover:border-blue-500 hover:border-2 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-700 text-white text-sm rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
