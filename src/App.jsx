import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        event.target.closest('.sidebar') === null &&
        !event.target.closest('.hamburger-btn')
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleNavbarVisibility);
    return () => window.removeEventListener('scroll', handleNavbarVisibility);
  }, [lastScrollY]);

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100 font-sans antialiased">
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-200 { transition-delay: 200ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-600 { transition-delay: 600ms; }
        body::-webkit-scrollbar {
          width: 12px;
        }
        body::-webkit-scrollbar-track {
          background: #1e293b;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #06b6d4;
          border-radius: 6px;
          border: 3px solid #1e293b;
        }
        body::-webkit-scrollbar-thumb:hover {
          background-color: #22d3ee;
        }
        .sidebar {
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .sidebar.open {
          transform: translateX(0);
        }
        .overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
        }
        .overlay.open {
          opacity: 0.7;
          pointer-events: auto;
        }
        .navbar-hidden {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        setSidebarOpen={setSidebarOpen}
        showNavbar={showNavbar}
      />
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;