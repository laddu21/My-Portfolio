import AboutMe from './AboutMe';
import Projects from './Projects';
import Feedback from './Feedback';
import { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! I'm Rabbani's AI assistant. Ask me anything about Shaik Rabbani!" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMessage = { from: "user", text: input };
        setMessages(prev => [...prev, userMessage]);
        const userInput = input;
        setInput("");

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userInput })
            });
            const data = await res.json();

            // Add actual response
            setMessages(prev => [...prev, { from: "bot", text: data.response }]);
        } catch (err) {
            // Add error
            setMessages(prev => [...prev, { from: "bot", text: "Sorry, I'm having trouble responding right now." }]);
        }
    };

    return (
        <>
            {/* Chat Icon Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center group ring-4 ring-white/20 hover:ring-white/40"
                >
                    <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-80 sm:w-1/4 max-h-[500px] bg-gradient-to-br from-gray-50 via-blue-25 to-purple-25 dark:from-gray-50 dark:via-blue-25 dark:to-purple-25 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl z-50 border border-white/30 dark:border-white/30 animate-in slide-in-from-bottom-4 duration-500 ring-1 ring-black/5 dark:ring-white/20">
                    {/* Header */}
                    <div className="flex items-center justify-between p-2.5 border-b border-gray-200/50 dark:border-white/20 bg-black rounded-t-3xl">
                        <h5 className="text-white font-bold text-xl">
                            ✨ Ask Rabbani's AI
                        </h5>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-600 dark:hover:text-gray-800 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-200 rounded-full p-2 hover:scale-110 hover:rotate-90"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="p-3 w-full overflow-hidden">
                        <div className="max-h-80 overflow-y-auto overflow-x-hidden mb-4 bg-gradient-to-br from-gray-25 to-blue-25 dark:from-gray-25 dark:to-blue-25 rounded-2xl p-2 space-y-4 shadow-inner border border-gray-200/50 dark:border-white/30 w-full">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                                    <div className={`max-w-xs px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${msg.from === 'user'
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/25'
                                        : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-50 dark:to-gray-100 text-black dark:text-black shadow-gray-200 dark:shadow-white/20 border border-gray-200 dark:border-white/30 hover:shadow-lg'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="flex gap-2 w-full">
                            <input
                                type="text"
                                className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-300 dark:border-white/30 bg-white dark:bg-white text-black dark:text-black placeholder-gray-600 dark:placeholder-gray-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-300/70 dark:focus:ring-blue-400/70 transition-all duration-300 shadow-sm focus:shadow-xl focus:scale-[1.02]"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="💬 Ask me anything about Rabbani..."
                                onKeyDown={e => e.key === "Enter" && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-3 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center min-w-[48px] w-12"
                                disabled={!input.trim()}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

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
