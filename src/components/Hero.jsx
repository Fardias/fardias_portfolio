import PropTypes from 'prop-types';
import { FaTiktok } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GithubIcon, LinkedInIcon } from './Icons';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="container mx-auto px-6 pt-29 pb-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 animate-on-scroll">
          <div className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium mb-6">
            Front End Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
            Hi, I'm <span className="text-cyan-400">Fardias Alfathan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-5 text-gray-300 max-w-lg">
            I craft responsive websites and powerful applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-600 transition duration-300 text-center font-medium shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              Get in Touch
            </a>
            <div className="flex space-x-5 items-center my-3">
              <a href="https://github.com/fardias" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/fardias-alfathan-179b0829a/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@faralf13" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/fardias1" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className="h-7 w-7 hover:text-cyan-400 transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center animate-on-scroll delay-200">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 xl:w-[550px] xl:h-[550px] p-1">
              <img src="1.svg" alt="Profile" className="w-full h-full border-4 border-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Hero;

