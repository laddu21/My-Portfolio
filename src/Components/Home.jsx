import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Feedback from './Feedback';
import ChatBot from './ChatBot';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div id="home" className="w-full h-screen px-4 sm:px-6 lg:px-8 py-16 flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Info Side */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
                            Welcome to My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                            I'm Shaik Rabbani, a passionate Full Stack Developer creating amazing digital experiences
                        </p>
                        <div className="flex flex-row justify-center gap-3">
                            <a href="#projects" className="flex-1 max-w-[160px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm">
                                View My Work
                            </a>
                            <a href="#about" className="flex-1 max-w-[160px] bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm">
                                Learn More About Me
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-shrink-0 mb-8 lg:mb-0 relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 -m-4">
                            <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-20 blur-xl"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse opacity-30 blur-lg"></div>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative z-10">
                            <div className="relative">
                                {/* Gradient Border Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 animate-spin" style={{ animationDuration: '8s' }}>
                                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full"></div>
                                </div>

                                {/* Profile Image */}
                                <img
                                    src="/IMGS/professional_half-pic.jpg"
                                    alt="Shaik Rabbani"
                                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-all duration-500 border-4 border-white dark:border-gray-800 mx-auto lg:mx-0 hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                                    Available for Work
                                </div>

                                {/* Skill Indicators */}
                                <div className="absolute -top-4 -left-4 flex flex-col gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        <span className="text-white text-xs font-bold">JS</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                                        <span className="text-white text-xs font-bold">React</span>
                                    </div>
                                </div>

                                <div className="absolute -top-4 -right-4 flex flex-col gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
                                        <span className="text-white text-xs font-bold">Node</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '3s' }}>
                                        <span className="text-white text-xs font-bold">DB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutMe />
            <Projects />
            <Feedback />
            <ChatBot />
        </div>
    );
};

export default Home;
