import { useState, useEffect } from 'react'
import { FaFlutter, FaReact, } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { EnvelopeIcon, CodeBracketIcon, UserIcon, BriefcaseIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './components/Icons'
import './App.css'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true) // State untuk visibilitas navbar
  const [lastScrollY, setLastScrollY] = useState(0) // State untuk menyimpan posisi scroll terakhir

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setSidebarOpen(false) // Close sidebar after clicking
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      })
    }
  }

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element)
    })

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && event.target.closest('.sidebar') === null && !event.target.closest('.hamburger-btn')) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [sidebarOpen])

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [sidebarOpen])

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleNavbarVisibility = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false) // Hide navbar when scrolling down
      } else {
        setShowNavbar(true) // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleNavbarVisibility)
    return () => window.removeEventListener('scroll', handleNavbarVisibility)
  }, [lastScrollY])

  return (
    <div className="bg-slate-900 min-h-screen text-gray-100 font-sans antialiased">
      {/* Add CSS for animations and custom scrollbar */}
      <style jsx>{`
        /* Animation styles */
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
        
        /* Custom scrollbar - using primary color */
        body::-webkit-scrollbar {
          width: 12px;
        }
        body::-webkit-scrollbar-track {
          background: #1e293b; /* slate-800 */
        }
        body::-webkit-scrollbar-thumb {
          background-color: #06b6d4; /* cyan-500 */
          border-radius: 6px;
          border: 3px solid #1e293b; /* slate-800 */
        }
        body::-webkit-scrollbar-thumb:hover {
          background-color: #22d3ee; /* cyan-400 */
        }
        
        /* Sidebar animation */
        .sidebar {
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }
        .sidebar.open {
          transform: translateX(0);
        }
        
        /* Overlay animation */
        .overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
        }
        .overlay.open {
          opacity: 0.7;
          pointer-events: auto;
        }

        /* Navbar visibility */
        .navbar-hidden {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full bg-slate-800/90 backdrop-blur-lg z-40 border-b border-slate-700/50 shadow-lg transition-transform duration-300 ${showNavbar ? '' : 'navbar-hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href='/' className="text-cyan-400 font-bold text-2xl tracking-tight">FARALF</a>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`hover:text-cyan-400 hover:cursor-pointer transition-colors duration-300 font-medium ${activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          {/* Hamburger menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 hamburger-btn focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black z-50 overlay ${sidebarOpen ? 'open' : ''}`}></div>
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 sidebar ${sidebarOpen ? 'open' : ''} shadow-2xl border-r border-slate-700`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-cyan-400 font-bold text-xl cursor-pointer">FARALF</a>
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
                className={`py-2 px-4 rounded-lg transition-colors duration-300 ${activeSection === item
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

      {/* Hero Section */}
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
                <GithubIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
                <LinkedInIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
                <TwitterIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center animate-on-scroll delay-200 ">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
                <img
                  src="1.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-800 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <UserIcon className="h-8 w-8 mr-3 text-cyan-400" />
                About Me
              </h2>
              <div className="h-1 w-20 bg-cyan-400 mb-8"></div>
            </div>
            <div className="md:w-2/3 animate-on-scroll delay-200">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                  <span>Based in San Francisco</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Just Tech Logos */}
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
            {[
              { name: 'React JS', icon: <FaReact className="h-8 w-8 text-cyan-400" /> },
              { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="h-8 w-8 text-cyan-400" /> },
              { name: 'Bootstrap', icon: <FaBootstrap className="h-8 w-8 text-cyan-400" /> },
              { name: 'Flutterr', icon: <FaFlutter className="h-8 w-8 text-cyan-400" /> },
              { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8 text-cyan-400" /> },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`animate-on-scroll delay-${index % 3 * 200} flex flex-col items-center bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 border border-slate-700 shadow-lg group`}
              >
                <div className="w-16 h-16 bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-center group-hover:text-cyan-400 transition duration-300">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-800 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <BriefcaseIcon className="h-8 w-8 mr-3 text-cyan-400" />
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                desc: "A fully responsive e-commerce platform built with React, Node.js and MongoDB.",
                tags: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Task Management App",
                desc: "A beautiful task management application with drag and drop functionality.",
                tags: ["Vue.js", "Firebase", "Tailwind"]
              },
              {
                title: "AI Content Generator",
                desc: "An AI-powered application that generates creative content based on user prompts.",
                tags: ["Python", "TensorFlow", "FastAPI"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`animate-on-scroll delay-${index * 200} bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-slate-700`}
              >
                <div className="h-48 bg-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-slate-800 text-xs rounded-full text-cyan-400">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 font-medium flex items-center">
                      GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll">
            <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <EnvelopeIcon className="h-8 w-8 mr-3 text-cyan-400" />
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-cyan-400 mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 animate-on-scroll delay-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-slate-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-lg hover:opacity-90 transition duration-300 font-medium shadow-lg shadow-cyan-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-cyan-400 font-bold text-2xl">Portfolio</span>
              <p className="text-gray-400 mt-2">Building amazing web experiences.</p>
            </div>
            <div className="flex space-x-6">
              <GithubIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              <LinkedInIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              <TwitterIcon className="h-6 w-6 hover:text-cyan-400 transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App