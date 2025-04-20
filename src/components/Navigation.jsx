import PropTypes from 'prop-types';

const Navigation = ({ activeSection, scrollToSection, setSidebarOpen, showNavbar }) => {
  return (
    <nav
      className={`fixed w-full bg-slate-800/90 backdrop-blur-lg z-40 border-b border-slate-700/50 shadow-lg transition-transform duration-300 ${
        showNavbar ? '' : 'navbar-hidden'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-cyan-400 font-bold text-2xl tracking-tight">
          FARALF
        </a>
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`hover:text-cyan-400 hover:cursor-pointer transition-colors duration-300 font-medium ${
                activeSection === item ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 hamburger-btn focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  showNavbar: PropTypes.bool.isRequired,
};

export default Navigation;