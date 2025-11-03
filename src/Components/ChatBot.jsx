import { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi! I'm Rabbani's AI assistant. Ask me anything about Shaik Rabbani!" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Load chat history from localStorage on mount
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatHistory');
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                if (parsed.length > 0) {
                    setMessages(parsed);
                }
            } catch (error) {
                console.error('Error loading chat history:', error);
            }
        }
    }, []);

    // Save chat history to localStorage whenever messages change
    useEffect(() => {
        if (messages.length > 1) { // Only save if there are messages beyond the initial greeting
            localStorage.setItem('chatHistory', JSON.stringify(messages));
        }
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (messageText = null) => {
        const textToSend = messageText || input;
        if (!textToSend.trim()) return;

        const userMessage = { from: "user", text: textToSend };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: textToSend })
            });
            const data = await res.json();

            // Simulate typing delay for better UX
            setTimeout(() => {
                setMessages(prev => [...prev, { from: "bot", text: data.response }]);
                setIsTyping(false);
            }, 500);
        } catch (err) {
            setTimeout(() => {
                setMessages(prev => [...prev, { from: "bot", text: "Sorry, I'm having trouble responding right now." }]);
                setIsTyping(false);
            }, 500);
        }
    };

    const quickActions = [
        { label: "💼 Skills", message: "Tell me about your skills" },
        { label: "🚀 Projects", message: "Show me your projects" },
        { label: "📧 Contact", message: "How can I contact you?" },
        { label: "🎓 Education", message: "Tell me about your education" }
    ];

    const clearChat = () => {
        setMessages([
            { from: "bot", text: "Hi! I'm Rabbani's AI assistant. Ask me anything about Shaik Rabbani!" }
        ]);
        localStorage.removeItem('chatHistory');
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
                <div className="fixed bottom-6 right-6 w-[95vw] sm:w-96 max-h-[600px] bg-gradient-to-br from-gray-50 via-blue-25 to-purple-25 dark:from-gray-50 dark:via-blue-25 dark:to-purple-25 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl z-50 border border-white/30 dark:border-white/30 animate-in slide-in-from-bottom-4 duration-500 ring-1 ring-black/5 dark:ring-white/20">
                    {/* Header */}
                    <div className="flex items-center justify-between p-2.5 border-b border-gray-200/50 dark:border-white/20 bg-black rounded-t-3xl">
                        <h5 className="text-white font-bold text-lg sm:text-xl">
                            ✨ Ask Rabbani's AI
                        </h5>
                        <div className="flex gap-2">
                            <button
                                onClick={clearChat}
                                className="text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-700 rounded-full p-2 hover:scale-110"
                                title="Clear chat"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-all duration-300 hover:bg-gray-700 rounded-full p-2 hover:scale-110 hover:rotate-90"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="p-3 w-full overflow-hidden flex flex-col" style={{ height: 'calc(100% - 60px)' }}>
                        <div className="flex-1 overflow-y-auto overflow-x-hidden mb-3 bg-gradient-to-br from-gray-25 to-blue-25 dark:from-gray-25 dark:to-blue-25 rounded-2xl p-3 space-y-3 shadow-inner border border-gray-200/50 dark:border-white/30 w-full">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${msg.from === 'user'
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-500/25'
                                        : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-50 dark:to-gray-100 text-black dark:text-black shadow-gray-200 dark:shadow-white/20 border border-gray-200 dark:border-white/30 hover:shadow-lg'
                                        }`}>
                                        <div className="text-sm break-words">{msg.text}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-50 dark:to-gray-100 text-black px-4 py-3 rounded-2xl shadow-lg border border-gray-200 dark:border-white/30">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Action Buttons */}
                        {messages.length <= 1 && !isTyping && (
                            <div className="grid grid-cols-2 gap-2 mb-3">
                                {quickActions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(action.message)}
                                        className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-50 dark:to-purple-50 text-gray-700 dark:text-gray-700 px-3 py-2 rounded-xl border border-blue-200 dark:border-purple-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-100 dark:hover:to-purple-100 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md font-medium"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="flex gap-2 w-full">
                            <input
                                type="text"
                                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border-2 border-gray-300 dark:border-white/30 bg-white dark:bg-white text-black dark:text-black placeholder-gray-600 dark:placeholder-gray-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-300/70 dark:focus:ring-blue-400/70 transition-all duration-300 shadow-sm focus:shadow-xl focus:scale-[1.02] text-sm"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="💬 Ask me anything..."
                                onKeyDown={e => e.key === "Enter" && handleSend()}
                                disabled={isTyping}
                            />
                            <button
                                onClick={() => handleSend()}
                                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-3 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center min-w-[44px] sm:min-w-[48px]"
                                disabled={!input.trim() || isTyping}
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default ChatBot;
