import { useState } from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close mobile menu
    };

    return (
        <nav className="w-full py-4 bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg border-b border-white/20 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center w-full">
                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold tracking-wider bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                        RABBANI
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg relative group transition-all duration-300 ease-in-out">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </a>
                        <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg relative group transition-all duration-300 ease-in-out">
                            About Me
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </a>
                        <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg relative group transition-all duration-300 ease-in-out">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </a>
                        <a href="#feedback" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg relative group transition-all duration-300 ease-in-out">
                            Feedback
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </a>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-xl"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>

                {/* Offcanvas Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
                        <div className="absolute left-0 top-16 h-screen w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 translate-x-0">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 z-10"
                            >
                                <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="p-4">
                                <div className="flex flex-col space-y-4">
                                    <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg transition-all duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" onClick={handleLinkClick}>
                                        Home
                                    </a>
                                    <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg transition-all duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" onClick={handleLinkClick}>
                                        About Me
                                    </a>
                                    <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg transition-all duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" onClick={handleLinkClick}>
                                        Projects
                                    </a>
                                    <a href="#feedback" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 font-bold text-lg transition-all duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700" onClick={handleLinkClick}>
                                        Feedback
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
