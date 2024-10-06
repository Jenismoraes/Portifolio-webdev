import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#13072e] to-[#3f2182] text-white p-8 dark:bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-4">
                        <span className="font-bold text-lg">Jeniffer Moraes</span>
                    </div>
                    <p className="text-sm">&copy; 2024. Todos os direitos reservados</p>
                </div>

                <div className="flex space-x-12 mt-6 md:mt-0">
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-2">Social</h3>
                        <ul>
                            <li className="flex flex-row items-center">
                                <FaGithub className="mr-1" />
                                <a href="https://github.com/Jenismoraes" className="hover:underline">GitHub</a>
                            </li>
                            <li className="flex flex-row items-center">
                                <FaInstagram className="mr-1" />
                                <a href="https://www.instagram.com/jeniss_moraes/" className="hover:underline">Instagram</a>
                            </li>
                            <li className="flex flex-row items-center">
                                <FaLinkedin className="mr-1" />
                                <a href="https://www.linkedin.com/in/jeniffer-moraes-15bba4277/" className="hover:underline">Linkedin</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-2">Menu</h3>
                        <ul>
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/projetos/0" className="hover:underline">Projetos</Link></li>
                            <li><Link to="/contato" className="hover:underline">Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
