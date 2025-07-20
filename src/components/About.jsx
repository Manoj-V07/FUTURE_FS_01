import Profile from '../assets/profile.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
    const educationData = [
  {
    level: "College",
    title: "B.Tech in Computer Science",
    institution: "Sri Eshwar College of Engineering , Coimbatore",
    year: "2024 – 2028",
    details: [
      "Currently pursuing my degree with a CGPA of 8.27.",
      "Focused on subjects like Web Development, DSA, and DBMS.",
      "Built multiple personal and academic projects using React, Node.js, and MongoDB.",
      "Participated in technical hackathons and coding contests.",
    ],
  },
  {
    level: "HSC",
    title: "Higher Secondary Education",
    institution: "Sri Lathangi Vidhya Mandir Higher Secondary School , Pollachi , Coimbatore",
    year: "2023 – 2024",
    details: [
      "Completed 12th grade with 93.5% aggregate.",
      "Specialized in Mathematics, Physics, and Computer Science.",
      "Developed logical thinking and problem-solving skills.",
      "Took part in school-level quiz competitions.",
    ],
  },
  {
    level: "SSLC",
    title: "10th Grade (SSLC)",
    institution: "Sri Lathangi Vidhya Mandir Higher Secondary School , Pollachi , Coimbatore",
    year: "2021 – 2022",
    details: [
      "Scored 95% overall in 10th standard.",
      "Excelled in core subjects including Science and Mathematics.",
      "Actively participated in school events and activities.",
    ],
  },
];

  const skills = ['Web Developer', 'Front-End Developer', 'React Developer', 'UI/UX Enthusiast'];

  return (
    
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 bg-slate-800 text-slate-50 mx-auto">
            <h1 data-aos = "fade-right" className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-10">✨ABOUT ME✨</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 mx-auto">
        
        <div data-aos="fade-right" className="order-2 md:order-1 md:w-2/3 text-center md:text-left">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Hello, I'm Manoj</span>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-indigo-400 h-10 mt-4 mb-4">
            <Typewriter words={skills} loop={0} cursor cursorStyle='|' typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
          </p>

          <p className="italic text-slate-400 text-base sm:text-lg mb-4">
            "Transforming ideas into reality through code."
          </p>

          <p className="text-base sm:text-lg mb-4">
            I am a passionate web developer with a keen interest in creating dynamic <br />
            and responsive web applications. My journey in web development has been <br />
            fueled by my love for coding and problem-solving.
          </p>

          <p className="text-base sm:text-lg">
            I am very interested in building user-friendly interfaces and ensuring <br />
            seamless user experiences. I am always eager to learn new <br />
            technologies and improve my skills.
          </p>

          <a href="/Manoj_V_Resume.docx" download className="inline-block mt-6 px-6 py-2 bg-indigo-600 bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500  text-white rounded-lg shadow-md transition">
            Download Resume
          </a>
          <a href="/Manoj_V_CV.docx" download className="inline-block ml-10 mt-6 px-6 py-2 bg-indigo-600 bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500  text-white rounded-lg shadow-md transition">
            Download CV
          </a>
        </div>

        <div className="order-1 md:order-2 md:w-1/3">
        <span className="md:mt-20  flex justify-center md:justify-end" data-aos="fade-left">
            <img src={Profile} alt="Profile" className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-lg mx-auto transform transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-[10px]"/>
        </span>
        </div>
      </div>
   

        <div className="mt-16">
          <h3 className="text-3xl font-bold m-4 mb-8 text-blue-400">🎓 My Education</h3>
          <div className="relative border-l-2 border-blue-500 ml-4 space-y-10">
            <div data-aos="fade-up" className="absolute left-[-9px] top-20 w-4 h-4 bg-blue-500 rounded-full"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="relative ml-6">
              
              <div data-aos="fade-left" className="group bg-slate-800 rounded-xl p-5 shadow-md hover:border-blue-500 hover:border-2 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <h4 className="text-lg font-semibold text-blue-400">{edu.level}</h4>
                <p className="text-md font-medium">{edu.title}</p>
                <p className="text-sm text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-400 italic">{edu.year}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-300">
                  {edu.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        
 </div>
 </div>
      
  );
};

export default About;
