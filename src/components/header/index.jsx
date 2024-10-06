import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="flex justify-between p-4 bg-white dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Jeniffer Moraes</h1>
            <nav>
                <Link to="/" className="mr-4 text-gray-900 dark:text-white">Apresentação</Link>
                <Link to="/projetos/0" className="mr-4 text-gray-900 dark:text-white">Projetos</Link>
                <Link to="/contatos/0" className="text-gray-900 dark:text-white">Contato</Link>
            </nav>
            <button
                className="ml-4"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "🌙" : "☀️"}
            </button>
        </header>
    );
};

export default Header;
