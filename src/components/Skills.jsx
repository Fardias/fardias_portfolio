import { FaReact,  } from 'react-icons/fa6';

import { SiTypescript } from 'react-icons/si';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const skills = [
    { name: 'React JS', icon: <FaReact className="h-8 w-8 text-cyan-400" /> },
    { name: 'React Native', icon: <FaReact className="h-8 w-8 text-cyan-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8 text-cyan-400" /> },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <CodeBracketIcon className="h-8 w-8 mr-3 text-cyan-400" />
            My Skills
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`animate-on-scroll delay-${index % 3 * 200} flex flex-col items-center bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 border border-slate-700 shadow-lg group`}
            >
              <div className="w-16 h-16 bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="font-medium text-center group-hover:text-cyan-400 transition duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;