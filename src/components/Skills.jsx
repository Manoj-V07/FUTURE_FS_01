import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillData = {
  Frontend: [
    { name: 'HTML', icon: 'devicon-html5-plain colored', level: 90 },
    { name: 'CSS', icon: 'devicon-css3-plain colored', level: 85 },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 80 },
    { name: 'React', icon: 'devicon-react-original colored', level: 75 },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 70 },
  ],
  Backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 75 },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored', level: 70 },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 65 },
  ],
  Tools: [
    { name: 'GitHub', icon: 'devicon-github-original colored', level: 80 },
    { name: 'PowerPoint', icon: 'fa-solid fa-file-powerpoint text-[#D24726]', level: 80 },
  ],
};

const aosAnimations = ["fade-right", "fade-left", "fade-right"];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-800 text-slate-50">
      <h2 className="text-[3.5rem] font-bold text-center mb-14">✨MY SKILLS✨</h2>

      <div className="grid grid-cols-1 gap-8">
        {Object.entries(skillData).map(([category, skills], index) => (
          <div
            key={category}
            data-aos={aosAnimations[index % aosAnimations.length]}
            className="bg-slate-800 text-slate-50 p-6 rounded-xl shadow-md hover:border-blue-500 hover:border-2 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">{category}</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center gap-3 mb-1">
                    <i className={`${skill.icon} text-2xl`}></i>
                    <span className="text-md font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
