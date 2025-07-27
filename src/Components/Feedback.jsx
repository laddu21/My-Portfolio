import { useState } from "react";
import emailjs from "emailjs-com";

const Feedback = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Simple validation
        if (!form.name || !form.email || !form.message) {
            setError("All fields are required.");
            return;
        }
        // EmailJS send
        emailjs.send(
            "service_otti89e",      // replace with your EmailJS service ID
            "template_mmogs2h",     // replace with your EmailJS template ID
            form,
            "iAqr02SsUQsSckKdF"          // replace with your EmailJS user ID (public key)
        ).then(() => {
            setSuccess("Thank you! Your feedback has been sent.");
            setForm({ name: "", email: "", message: "" });
        }, () => {
            setError("Failed to send. Please try again.");
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Send Me Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="4"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        {error && <div className="text-danger mb-2">{error}</div>}
                        {success && <div className="text-success mb-2">{success}</div>}
                        <button type="submit" className="btn btn-success w-100">Send</button>
                    </form>
                </div>
            </div>
            {/* Social Media Links */}
            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
                <a href="https://www.linkedin.com/in/rabbani21" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fab fa-linkedin me-2"></i> 
                </a>
                <a href="https://github.com/laddu21" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                    <i className="fab fa-github me-2"></i> 
                </a>
                <a href="https://x.com/RabbaniSk696640" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                    <i className="fab fa-twitter me-2"></i> 
                </a>
                <a href="mailto:rabbanisk162002@gmail.com" className="btn btn-success">
                    <i className="fas fa-envelope me-2"></i> 
                </a>
                <a href="https://www.instagram.com/rabbani_____shaik/" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    <i className="fab fa-instagram me-2"></i> 
                </a>
            </div>
        </div>
    );
}

export default Feedback;
