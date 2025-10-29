import { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
                // Set first project as default selected
                if (data.length > 0) {
                    setSelectedProject(data[0]);
                }
            })
            .catch(err => {
                setError('Failed to load projects');
                setLoading(false);
            });
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    if (loading) return (
        <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 dark:border-blue-400"></div>
            <span className="ml-3 text-lg text-gray-600 dark:text-gray-100">Loading projects...</span>
        </div>
    );

    if (error) return (
        <div className="text-center py-16">
            <div className="text-red-500 dark:text-red-400 text-xl font-semibold">{error}</div>
        </div>
    );

    const fullStackProjects = projects.filter(p => p.category === 'Full Stack');
    const frontendProjects = projects.filter(p => p.category === 'Frontend');

    return (
        <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Heading Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Projects
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
                    Here are some of my projects showcasing my skills and experience.
                </p>
            </div>

            {/* YouTube-like Layout */}
            <div className="flex gap-6 h-[800px]">
                {/* Left Section - Project Cards (25%) */}
                <div className="w-1/4 overflow-y-auto">
                    {/* Full Stack Projects */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
                            Full Stack
                        </h3>
                        <div className="space-y-4">
                            {fullStackProjects.map(project => (
                                <div
                                    key={project.id}
                                    className={`relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${selectedProject?.id === project.id ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <img
                                        src={project.image}
                                        className="w-full h-24 object-contain"
                                        alt={project.title}
                                    />
                                    <div className="p-3">
                                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">
                                            {project.title}
                                        </h5>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                                            {project.description.substring(0, 60)}...
                                        </p>
                                    </div>

                                    {/* Hover Overlay with Link Icon */}
                                    {hoveredProject === project.id && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <div className="bg-white rounded-full p-2 shadow-lg">
                                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frontend Projects */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-b-2 border-green-500 pb-2">
                            Frontend
                        </h3>
                        <div className="space-y-4">
                            {frontendProjects.map(project => (
                                <div
                                    key={project.id}
                                    className={`relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${selectedProject?.id === project.id ? 'ring-2 ring-green-500' : ''
                                        }`}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <img
                                        src={project.image}
                                        className="w-full h-24 object-contain"
                                        alt={project.title}
                                    />
                                    <div className="p-3">
                                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">
                                            {project.title}
                                        </h5>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                                            {project.description.substring(0, 60)}...
                                        </p>
                                    </div>

                                    {/* Hover Overlay with Link Icon */}
                                    {hoveredProject === project.id && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <div className="bg-white rounded-full p-2 shadow-lg">
                                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section - Project Overview (70%) */}
                <div className="w-3/4 h-full bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
                    {selectedProject && (
                        <div className="h-full flex flex-col">
                            {/* Project Image */}
                            <div className="h-1/2 relative overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="h-1/2 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {selectedProject.title}
                                        </h2>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedProject.category === 'Full Stack'
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            }`}>
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg ${selectedProject.category === 'Full Stack'
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                                            : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                                            }`}
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
