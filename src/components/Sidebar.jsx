import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';

const Sidebar = ({ activeSection, scrollToSection, sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className={`fixed inset-0 bg-black z-50 overlay ${sidebarOpen ? 'open' : ''}`}></div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 sidebar ${
          sidebarOpen ? 'open' : ''
        } shadow-2xl border-r border-slate-700`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-cyan-400 font-bold text-xl cursor-pointer">
              FARALF
            </a>
            <button
              className="text-gray-400 hover:text-cyan-400 focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
                  activeSection === item
                    ? 'bg-cyan-400/10 text-cyan-400 font-medium'
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="flex justify-center space-x-4 pt-4 border-t border-slate-700">
              <GithubIcon className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
              <LinkedInIcon className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
              <TwitterIcon className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;