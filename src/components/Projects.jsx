import { BriefcaseIcon } from '@heroicons/react/24/outline';

const Projects = () => {
    const projects = [
        {
            title: 'SOFLEPRO',
            desc: 'A website providing learning resources for programming languages',
            tags: ['Next.js', 'Tailwind'],
            liveDemo: 'https://soflepro.vercel.app/',
            github: 'https://github.com/aftlah/soflepro',
            image: 'soflepro.png',
        },
    ];

    return (
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
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`animate-on-scroll delay-${index * 200} bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-slate-700`}
                        >
                            <div className="h-48 bg-slate-700 relative overflow-hidden">
                                
                                <img src={project.image} alt={project.title} />
                                
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-slate-800 text-xs rounded-full text-cyan-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                                    >
                                        Live Demo
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-300 font-medium flex items-center"
                                    >
                                        GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="text-center mt-12 animate-on-scroll">
                    <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                        View All Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;