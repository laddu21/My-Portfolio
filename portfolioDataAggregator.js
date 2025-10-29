const fs = require('fs');
const path = require('path');

// Portfolio Data Aggregator
class PortfolioDataAggregator {
    constructor() {
        this.data = {};
        this.loadAllData();
    }

    loadAllData() {
        try {
            // Load projects data
            this.data.projects = require('./data/projects.json');

            // Load resume data
            this.data.resume = require('./src/data/resume.json');

            // Personal information (extracted from components)
            this.data.personal = {
                name: "Shaik Rabbani",
                title: "Full Stack Developer",
                location: "Hyderabad",
                age: 23,
                email: "rabbanisk162002@gmail.com",
                description: "I am a passionate full stack web developer with expertise in building modern, scalable, and responsive web applications. My journey in tech is driven by a love for problem-solving, continuous learning, and delivering impactful solutions.",
                socialLinks: {
                    linkedin: "https://www.linkedin.com/in/rabbani21",
                    github: "https://github.com/laddu21",
                    twitter: "https://x.com/RabbaniSk696640",
                    instagram: "https://www.instagram.com/rabbani_____shaik/"
                },
                languages: ["English", "Hindi", "Telugu"],
                hobbies: ["Coding", "GYM", "reading", "exploring technologies"],
                interests: ["Web development", "AI", "open-source"]
            };

            // Extract skills by category
            this.data.skillCategories = this.data.resume.skills.reduce((acc, category) => {
                acc[category.category.toLowerCase().replace(/\s+/g, '_')] = category.technologies;
                return acc;
            }, {});

            // Flatten all skills
            this.data.allSkills = this.data.resume.skills.flatMap(category =>
                category.technologies
            );

            // Extract experience
            this.data.experience = this.data.resume.experience;

            // Extract education
            this.data.education = this.data.resume.education;

            // Create searchable content
            this.createSearchableContent();

        } catch (error) {
            console.error('Error loading portfolio data:', error);
        }
    }

    createSearchableContent() {
        this.searchableContent = {
            skills: {
                keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'frameworks', 'tools', 'expertise', 'proficient', 'experienced'],
                content: this.data.allSkills.join(' ').toLowerCase()
            },
            projects: {
                keywords: ['projects', 'work', 'portfolio', 'applications', 'apps', 'websites', 'development', 'coding'],
                content: this.data.projects.map(p => `${p.title} ${p.description} ${p.category}`).join(' ').toLowerCase()
            },
            experience: {
                keywords: ['experience', 'work experience', 'job', 'career', 'professional', 'background', 'history'],
                content: this.data.resume.experience.map(exp => `${exp.position} ${exp.company} ${exp.description} ${exp.technologies.join(' ')}`).join(' ').toLowerCase()
            },
            education: {
                keywords: ['education', 'degree', 'university', 'college', 'school', 'qualification', 'academic'],
                content: this.data.resume.education.map(edu => `${edu.degree} ${edu.institution} ${edu.description}`).join(' ').toLowerCase()
            },
            personal: {
                keywords: ['about', 'personal', 'background', 'introduction', 'who', 'name', 'location', 'age', 'contact', 'email', 'social', 'links'],
                content: `${this.data.personal.name} ${this.data.personal.title} ${this.data.personal.location} ${this.data.personal.description} ${this.data.personal.languages.join(' ')} ${this.data.personal.hobbies.join(' ')} ${this.data.personal.interests.join(' ')}`.toLowerCase()
            },
            contact: {
                keywords: ['contact', 'email', 'reach', 'connect', 'social media', 'linkedin', 'github', 'twitter', 'instagram'],
                content: `${this.data.personal.email} ${Object.values(this.data.personal.socialLinks).join(' ')}`.toLowerCase()
            }
        };
    }

    getData() {
        return this.data;
    }

    getSearchableContent() {
        return this.searchableContent;
    }

    // Get specific data sections
    getSkills() {
        return this.data.skillCategories;
    }

    getProjects() {
        return this.data.projects;
    }

    getExperience() {
        return this.data.experience;
    }

    getEducation() {
        return this.data.education;
    }

    getPersonalInfo() {
        return this.data.personal;
    }
}

module.exports = new PortfolioDataAggregator();