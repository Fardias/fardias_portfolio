import { UserIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
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
              Hello! I’m Fardias Alfathan, a passionate Frontend Developer with a keen interest in crafting exceptional websites and digital experiences. I specialize in building responsive, user-friendly interfaces that combine functionality with aesthetic appeal, ensuring seamless user experiences across devices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m currently pursuing a degree in Informatics Engineering at Budi Luhur University, where my journey in IT began. My academic background has provided me with a strong foundation in technology, fueling my curiosity to explore and master the art of website creation. With hands-on experience in modern web technologies, I’m dedicated to delivering innovative solutions that meet both user needs and business goals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                <span>Based in Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                <span>Specializing in Frontend Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;