import AboutMe from './AboutMe';
import Feedback from './Feedback';
import Projects from './Projects';
import Footer from './Footer';
import { useState } from 'react';

const ChatBot = () => {
    // State to manage messages and input
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! I'm Rabbani's AI assistant. Ask me anything about Shaik Rabbani!" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        // Simple bot responses 
        let response = "I'm here to help! You can ask about Rabbani's skills, projects, or contact info.";
        if (input.toLowerCase().includes("skills")) {
            response = "Shaik Rabbani specializes in JavaScript, React, Node.js, Express, and MongoDB.";
        } else if (input.toLowerCase().includes("projects")) {
            response = "Check out the Projects section above for Rabbani's latest work!";
        } else if (input.toLowerCase().includes("contact")) {
            response = "You can contact Rabbani via Email, LinkedIn, or Twitter. See the Feedback section for links.";
        } else if (input.toLowerCase().includes("resume")) {
            response = "You can download Rabbani's resume from the About Me section.";
        }
        else if (input.toLowerCase().includes("hello")) {
            response = "Hello! How can I assist you today?";
        }
        else if (input.toLowerCase().includes("hi")) {
            response = "Hi there! What would you like to know about Rabbani?";
        }
        else if (input.toLowerCase().includes("age")) {
            response = "23 years old";
        }
        else if (input.toLowerCase().includes("location")) {
            response = "Hyderabad";
        }
        else if (input.toLowerCase().includes("education")) {
            response = "Rabbani holds a Bachelor's degree in ECE.";
        }
        else if (input.toLowerCase().includes("experience")) {
            response = "Fresher, Ready to Collaborate.";
        }
        else if (input.toLowerCase().includes("hobbies")) {
            response = "Rabbani enjoys coding, GYM, reading, and exploring new technologies.";
        }
        else if (input.toLowerCase().includes("languages")) {
            response = "Rabbani is proficient in English, Hindi, and Telugu.";
        }
        else if (input.toLowerCase().includes("frameworks")) {
            response = "Rabbani has experience with React, Node.js, and Express.";
        }
        else if (input.toLowerCase().includes("tools")) {
            response = "Rabbani uses Git, Docker, and various cloud services.";
        }
        else if (input.toLowerCase().includes("interests")) {
            response = "Rabbani is interested in web development, AI, and open-source contributions.";
        }
        else {
            response = "I'm not sure about that. You can ask about skills, projects, or contact info.";
        }

        
        setMessages([...messages, { from: "user", text: input }, { from: "bot", text: response }]);
        setInput("");
    };

    return (
        <div className="chatbot-container" style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "320px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            zIndex: 9999,
            padding: "16px"
        }}>
            <h5 style={{marginBottom: "10px"}}>Ask Rabbani's AI</h5>
            <div style={{
                maxHeight: "180px",
                overflowY: "auto",
                marginBottom: "10px",
                background: "#f5f5f5",
                borderRadius: "8px",
                padding: "8px"
            }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        textAlign: msg.from === "bot" ? "left" : "right",
                        margin: "6px 0"
                    }}>
                        <span style={{
                            background: msg.from === "bot" ? "#e0e0e0" : "#d1e7dd",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            display: "inline-block"
                        }}>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div style={{display: "flex"}}>
                <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your question..."
                    style={{marginRight: "8px"}}
                    onKeyDown={e => e.key === "Enter" && handleSend()}
                />
                <button className="btn btn-success" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home-container">
            <AboutMe />
            <br /> <br />
            <Projects />
            <Feedback />
            <ChatBot />
            <br />
            <Footer />
        </div>
    );
};

export default Home;
