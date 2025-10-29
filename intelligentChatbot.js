const portfolioData = require('./portfolioDataAggregator');

class IntelligentChatbot {
    constructor() {
        this.portfolioData = portfolioData.getData();
        this.searchableContent = portfolioData.getSearchableContent();
    }

    // Categorize user query based on keywords and content analysis
    categorizeQuery(message) {
        const lowerMessage = message.toLowerCase().trim();

        // Check for greetings
        if (this.isGreeting(lowerMessage)) {
            return 'greeting';
        }

        // Check for specific categories
        for (const [category, data] of Object.entries(this.searchableContent)) {
            if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return category;
            }
        }

        // Check for project-specific queries
        if (this.isProjectQuery(lowerMessage)) {
            return 'projects';
        }

        // Check for skill-specific queries
        if (this.isSkillQuery(lowerMessage)) {
            return 'skills';
        }

        // Check for contact queries
        if (this.isContactQuery(lowerMessage)) {
            return 'contact';
        }

        // Default to general query
        return 'general';
    }

    isGreeting(message) {
        const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'what\'s up', 'sup'];
        return greetings.some(greeting => message.includes(greeting)) || message.length < 10;
    }

    isProjectQuery(message) {
        const projectKeywords = ['project', 'work', 'portfolio', 'app', 'application', 'website', 'mern', 'react', 'node', 'full stack'];
        return projectKeywords.some(keyword => message.includes(keyword));
    }

    isSkillQuery(message) {
        const skillKeywords = ['skill', 'technology', 'tech', 'programming', 'language', 'framework', 'tool', 'expertise', 'know'];
        return skillKeywords.some(keyword => message.includes(keyword));
    }

    isContactQuery(message) {
        const contactKeywords = ['contact', 'email', 'reach', 'connect', 'social', 'linkedin', 'github', 'twitter', 'instagram', 'phone'];
        return contactKeywords.some(keyword => message.includes(keyword));
    }

    // Generate intelligent response based on query category
    generateResponse(message, category) {
        switch (category) {
            case 'greeting':
                return this.generateGreetingResponse();
            case 'skills':
                return this.generateSkillsResponse(message);
            case 'projects':
                return this.generateProjectsResponse(message);
            case 'experience':
                return this.generateExperienceResponse(message);
            case 'education':
                return this.generateEducationResponse(message);
            case 'personal':
                return this.generatePersonalResponse(message);
            case 'contact':
                return this.generateContactResponse(message);
            default:
                return this.generateGeneralResponse(message);
        }
    }

    generateGreetingResponse() {
        const greetings = [
            `Hello! I'm ${this.portfolioData.personal.name}'s AI assistant. I'm here to tell you all about Shaik Rabbani's skills, projects, and experience. What would you like to know?`,
            `Hi there! Welcome to Shaik Rabbani's portfolio. I'm his AI assistant and I know everything about his work. Ask me about his skills, projects, or experience!`,
            `Greetings! I'm here to help you learn about Shaik Rabbani. Feel free to ask about his technical skills, projects, or professional background.`
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    generateSkillsResponse(message) {
        const skills = this.portfolioData.skillCategories;

        // Check for specific skill categories
        if (message.includes('frontend') || message.includes('front-end')) {
            const frontendSkills = skills.frontend_development || [];
            return `Shaik Rabbani specializes in Frontend Development with expertise in: ${frontendSkills.join(', ')}. He creates responsive and interactive user interfaces using modern web technologies.`;
        }

        if (message.includes('backend') || message.includes('back-end')) {
            const backendSkills = skills.backend_development || [];
            return `For Backend Development, Shaik Rabbani works with: ${backendSkills.join(', ')}. He builds scalable server-side applications and RESTful APIs.`;
        }

        if (message.includes('database')) {
            const dbSkills = skills.database_management || [];
            return `Shaik Rabbani has experience with various databases including: ${dbSkills.join(', ')}. He designs efficient data models and manages database operations.`;
        }

        if (message.includes('tool') || message.includes('devops')) {
            const toolSkills = skills.tools_technologies || [];
            return `Shaik Rabbani uses modern development tools and technologies: ${toolSkills.join(', ')}. He's experienced with version control, deployment, and development workflows.`;
        }

        // General skills response
        const allSkills = this.portfolioData.allSkills;
        return `Shaik Rabbani is a Full Stack Developer with expertise in: ${allSkills.slice(0, 10).join(', ')}, and many more technologies. He specializes in the MERN stack and modern web development practices.`;
    }

    generateProjectsResponse(message) {
        const projects = this.portfolioData.projects;

        // Check for specific project types
        if (message.includes('mern') || message.includes('full stack')) {
            const mernProjects = projects.filter(p => p.category === 'Full Stack');
            const projectNames = mernProjects.map(p => p.title).join(', ');
            return `Shaik Rabbani has built several Full Stack applications using the MERN stack: ${projectNames}. These projects showcase his ability to create complete web solutions from frontend to backend.`;
        }

        if (message.includes('frontend') || message.includes('ui') || message.includes('interface')) {
            const frontendProjects = projects.filter(p => p.category === 'Frontend');
            const projectNames = frontendProjects.map(p => p.title).join(', ');
            return `Shaik Rabbani has created impressive Frontend projects including: ${projectNames}. These demonstrate his skills in creating responsive and interactive user interfaces.`;
        }

        // Specific project queries
        const projectNames = projects.map(p => p.title.toLowerCase());
        const mentionedProject = projectNames.find(name =>
            message.includes(name) || projects.find(p => p.title.toLowerCase().includes(message.split(' ').find(word => word.length > 3)?.toLowerCase()))
        );

        if (mentionedProject) {
            const project = projects.find(p => p.title.toLowerCase() === mentionedProject);
            if (project) {
                return `${project.title}: ${project.description} This project demonstrates Shaik Rabbani's expertise in ${project.category} development.`;
            }
        }

        // General projects response
        const featuredProjects = projects.slice(0, 3).map(p => p.title).join(', ');
        return `Shaik Rabbani has worked on ${projects.length} impressive projects including: ${featuredProjects}. His portfolio features Full Stack applications, responsive websites, and interactive web solutions. Check out the Projects section for detailed information!`;
    }

    generateExperienceResponse(message) {
        const experience = this.portfolioData.experience;

        if (experience.length === 0) {
            return "Shaik Rabbani is a fresh graduate currently building his professional experience through personal projects and continuous learning.";
        }

        const latestExperience = experience[0];
        return `Shaik Rabbani's professional experience includes: ${latestExperience.position} at ${latestExperience.company} (${latestExperience.duration}). ${latestExperience.description} He works with technologies like: ${latestExperience.technologies.join(', ')}.`;
    }

    generateEducationResponse(message) {
        const education = this.portfolioData.education;

        if (education.length === 0) {
            return "I'm sorry, I don't have detailed education information available at the moment.";
        }

        const latestEducation = education[0];
        return `Shaik Rabbani holds a ${latestEducation.degree} from ${latestEducation.institution} (${latestEducation.duration}) with a ${latestEducation.grade}. ${latestEducation.description}`;
    }

    generatePersonalResponse(message) {
        const personal = this.portfolioData.personal;

        if (message.includes('age')) {
            return `Shaik Rabbani is ${personal.age} years old.`;
        }

        if (message.includes('location') || message.includes('where')) {
            return `Shaik Rabbani is based in ${personal.location}, India.`;
        }

        if (message.includes('hobbies') || message.includes('interests')) {
            return `Outside of coding, Shaik Rabbani enjoys: ${personal.hobbies.join(', ')}. His interests include: ${personal.interests.join(', ')}.`;
        }

        if (message.includes('languages')) {
            return `Shaik Rabbani speaks: ${personal.languages.join(', ')}.`;
        }

        // General personal response
        return `${personal.name} is a ${personal.age}-year-old ${personal.title} based in ${personal.location}. ${personal.description} He's passionate about ${personal.interests.join(', ')} and enjoys ${personal.hobbies.join(', ')}.`;
    }

    generateContactResponse(message) {
        const personal = this.portfolioData.personal;

        return `You can reach Shaik Rabbani through:
• Email: ${personal.email}
• LinkedIn: ${personal.socialLinks.linkedin}
• GitHub: ${personal.socialLinks.github}
• Twitter: ${personal.socialLinks.twitter}
• Instagram: ${personal.socialLinks.instagram}

Feel free to connect with him on any of these platforms!`;
    }

    generateGeneralResponse(message) {
        // Try to find relevant information from all categories
        const responses = [
            "I'd be happy to tell you more about Shaik Rabbani! You can ask about his skills, projects, experience, education, or how to contact him.",
            "Shaik Rabbani is a talented Full Stack Developer. What specific aspect would you like to know more about - his technical skills, projects, or professional background?",
            "I'm here to help you learn about Shaik Rabbani's portfolio. Try asking about his programming skills, recent projects, work experience, or contact information."
        ];

        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Main method to process user messages
    processMessage(message) {
        try {
            const category = this.categorizeQuery(message);
            const response = this.generateResponse(message, category);
            return { response, category };
        } catch (error) {
            console.error('Error processing message:', error);
            return {
                response: "I'm sorry, I'm having trouble processing your message right now. Please try again or ask about Shaik Rabbani's skills, projects, or experience.",
                category: 'error'
            };
        }
    }
}

module.exports = new IntelligentChatbot();