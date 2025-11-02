import React, { useState, useEffect } from 'react';
import resumeData from '../data/resume.json';

const name = "Rabbani"; // Replace with your name

const AboutMe = () => {
    const [displayed, setDisplayed] = useState('');
    const [activeTab, setActiveTab] = useState('skills');
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(name.slice(0, i + 1));
            i++;
            if (i === name.length) clearInterval(interval);
        }, 200); // Speed of typing
        return () => clearInterval(interval);
    }, []);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'skills':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {resumeData.skills.map((skillCategory, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{skillCategory.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillCategory.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'experience':
                return (
                    <div className="space-y-6">
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'education':
                return (
                    <div className="space-y-6">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="p-6 rounded-lg shadow-lg">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                                        <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                                    </div>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">{edu.duration}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Grade:</strong> {edu.grade}</p>
                                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'certifications':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Professional Certifications</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-orange-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">MERN Full Stack Development Certification</h4>
                                    <p className="text-gray-600 dark:text-gray-300">MERN - 2025</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Full-stack development with MERN stack and Generative AI integration</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Internshala Training Certification</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Internshala - 2023</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Top 5 performance award for outstanding project delivery and learning excellence</p>
                                </div>
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Cloud Computing Certification</h4>
                                    <p className="text-gray-600 dark:text-gray-300">NPTEL - 2024</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Cloud architecture, services, and deployment strategies</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">JavaScript Certification</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Cuvette - 2025</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Comprehensive JavaScript programming skills and modern ES6+ features</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">E-commerce Website Building Certification</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Greatstack - 2025</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Full-stack e-commerce development with modern frameworks and payment integration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'workshops':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Workshops & Training</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Full Stack Web Development Bootcamp</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Cuvette - 2025</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Comprehensive training in MERN stack development with real-world projects</p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">DevOps & CI/CD Pipeline Workshop</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Microsoft Learn - 2024</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Docker, Kubernetes, and Azure DevOps implementation</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Python Programming Workshop</h4>
                                    <p className="text-gray-600 dark:text-gray-300">W3 Technologies - 2023</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Advanced Python programming, data structures, and application development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'hobbies':
                return (
                    <div className="space-y-6">
                        <div className="p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Interests & Hobbies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl mb-3">💻</div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Coding & Programming</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Building projects, learning new technologies, and contributing to open source</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🏋️</div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Fitness & Gym</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Regular workouts, maintaining healthy lifestyle, and staying active</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">📚</div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Reading & Learning</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Technical books, blogs, and staying updated with industry trends</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🌍</div>
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Exploring Technologies</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Experimenting with new frameworks, tools, and emerging technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    const getTabClass = (tabId) => {
        const base = 'px-6 py-3 font-semibold transition-all duration-300 relative';
        if (activeTab === tabId) {
            switch (tabId) {
                case 'skills': return `${base} text-blue-600 border-b-2 border-blue-600`;
                case 'experience': return `${base} text-green-600 border-b-2 border-green-600`;
                case 'education': return `${base} text-purple-600 border-b-2 border-purple-600`;
                case 'certifications': return `${base} text-yellow-600 border-b-2 border-yellow-600`;
                case 'workshops': return `${base} text-red-600 border-b-2 border-red-600`;
                case 'hobbies': return `${base} text-pink-600 border-b-2 border-pink-600`;
                default: return `${base} text-blue-600 border-b-2 border-blue-600`;
            }
        } else {
            return `${base} text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:border-b-2 hover:border-blue-500`;
        }
    };

    return (
        <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Image Side */}
                <div className="flex-shrink-0 mb-8 lg:mb-0">
                    <img
                        src="/IMGS/PROFESSINOL PIC.jpg"
                        alt="Shaik Rabbani"
                        className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-white dark:border-gray-700 mx-auto lg:mx-0"
                    />
                </div>

                {/* Info Side */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
                        👋I 'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{displayed}</span>
                        <span className="animate-pulse text-blue-500">|</span>
                    </h1>

                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        <p>
                            I am a passionate full stack web developer with expertise in building modern, scalable, and responsive web applications. My journey in tech is driven by a love for problem-solving, continuous learning, and delivering impactful solutions.
                        </p>
                        <p>
                            I specialize in JavaScript, React, Node.js, Express, MongoDB, and have experience with cloud deployment and DevOps. I enjoy collaborating with teams, mentoring juniors, and always strive to write clean, maintainable code.
                        </p>
                        <p>
                            Explore my portfolio to see my projects and skills in action. I am open to freelance work, collaborations, and new opportunities. Let's connect!
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="my-8">
                        {/* Mobile: Icons only in a row */}
                        <div className="flex justify-center gap-4 mb-4 md:hidden">
                            <a href="https://www.linkedin.com/in/rabbani21" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="https://github.com/laddu21" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a href="mailto:rabbanisk162002@gmail.com"
                                className="w-12 h-12 flex items-center justify-center text-green-600 hover:text-green-700 transition-all duration-300 hover:scale-110">
                                <i className="fas fa-envelope text-2xl"></i>
                            </a>
                            <a href="https://x.com/RabbaniSk696640" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center text-blue-400 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="https://www.instagram.com/rabbani_____shaik/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center text-pink-600 hover:text-pink-700 transition-all duration-300 hover:scale-110">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        {/* Desktop: Full buttons with background */}
                        <div className="hidden md:flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="https://www.linkedin.com/in/rabbani21" target="_blank" rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fab fa-linkedin mr-2"></i>LinkedIn
                            </a>
                            <a href="https://github.com/laddu21" target="_blank" rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fab fa-github mr-2"></i>GitHub
                            </a>
                            <a href="mailto:rabbanisk162002@gmail.com"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fas fa-envelope mr-2"></i>Email
                            </a>
                            <a href="https://x.com/RabbaniSk696640" target="_blank" rel="noopener noreferrer"
                                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fab fa-twitter mr-2"></i>Twitter
                            </a>
                            <a href="https://www.instagram.com/rabbani_____shaik/" target="_blank" rel="noopener noreferrer"
                                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                                <i className="fab fa-instagram mr-2"></i>Instagram
                            </a>
                        </div>
                    </div>

                    {/* Resume Download */}
                    <div className="mt-6 flex justify-center">
                        <a href="/Shaik_Resume_Full_Stack.pdf" target="_blank" rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center text-sm md:text-base">
                            <i className="fas fa-file-alt mr-2"></i> Download Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="mb-4 md:mb-8">
                <div className="flex justify-center gap-1 md:gap-4 mb-4 md:mb-8 overflow-x-auto">
                    {[
                        { id: 'skills', label: 'Skills', icon: '💻' },
                        { id: 'experience', label: 'Experience', icon: '💼' },
                        { id: 'education', label: 'Education', icon: '🎓' },
                        { id: 'certifications', label: 'Certifications', icon: '🏆' },
                        { id: 'workshops', label: 'Workshops', icon: '🎯' },
                        { id: 'hobbies', label: 'Hobbies', icon: '🎨' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${getTabClass(tab.id)} px-2 py-2 text-sm md:px-6 md:py-4 md:text-lg whitespace-nowrap`}
                        >
                            <span className="mr-1 md:mr-2 text-xl md:text-2xl">{tab.icon}</span>
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
