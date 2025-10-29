import { useState } from "react";

const Feedback = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError("All fields are required.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess(data.success);
                setForm({ name: "", email: "", message: "" });
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Failed to send. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div id="feedback" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="rounded-2xl shadow-2xl p-8 backdrop-blur-md bg-opacity-95 dark:bg-opacity-0">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Send Me Feedback
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        I'd love to hear from you! Send me a message and I'll respond as soon as possible.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <textarea
                            name="message"
                            rows="6"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-300 resize-none"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-lg">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded-lg">
                            {success}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Sending...
                            </div>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Feedback;