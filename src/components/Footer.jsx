import { FaTiktok } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GithubIcon, LinkedInIcon } from './Icons';
const Footer = () => {
    return (
        <footer className="bg-slate-800 py-12 border-t border-slate-700">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <a href='/' className="text-cyan-400 font-bold text-2xl">FARALF</a>
                        <p className="text-gray-400 mt-2">Building amazing web experiences.</p>
                    </div>
                    <div className="flex space-x-6">
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
                        </a>          </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
                    <p>made with ❤️ by FARALF</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;