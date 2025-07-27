
const AboutMe = () => {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Image Side */}
                <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                        src="/IMGS/PROFESSINOL PIC.jpg"
                        alt="Shaik Rabbani"
                        className="img-fluid rounded-circle shadow"
                        style={{ maxWidth: "70%", maxHeight: "70%", borderRadius: "50%", boxShadow: "100px 14px 18px rgba(0,0,0,1)" }}
                    />
                </div>
                {/* Info Side */}
                <div className="col-md-7">
                    <h1>👋 I'm Rabbani</h1>
                    <h4 className="text-success mb-3">Full Stack Web Developer</h4>
                    <p>
                        I am a passionate full stack web developer with expertise in building modern, scalable, and responsive web applications. My journey in tech is driven by a love for problem-solving, continuous learning, and delivering impactful solutions.
                    </p>
                    <p>
                        I specialize in JavaScript, React, Node.js, Express, MongoDB, and have experience with cloud deployment and DevOps. I enjoy collaborating with teams, mentoring juniors, and always strive to write clean, maintainable code.
                    </p>
                    <p>
                        Explore my portfolio to see my projects and skills in action. I am open to freelance work, collaborations, and new opportunities. Let's connect!
                    </p>
                    <div className="mb-3">
                        <a href="https://www.linkedin.com/in/rabbani21" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-1">
                            <i className="fab fa-linkedin me-2"></i> 
                        </a>
                        <a href="https://github.com/laddu21" target="_blank" rel="noopener noreferrer" className="btn btn-dark mx-1">
                            <i className="fab fa-github me-2"></i> 
                        </a>
                        <a href="mailto:rabbanisk162002@gmail.com" className="btn btn-success mx-1">
                            <i className="fas fa-envelope me-2"></i> 
                        </a>
                        <a href="https://x.com/RabbaniSk696640" target="_blank" rel="noopener noreferrer" className="btn btn-info mx-1">
                            <i className="fab fa-twitter me-2"></i> 
                        </a>
                        <a href="https://www.instagram.com/rabbani_____shaik/" target="_blank" rel="noopener noreferrer" className="btn btn-danger mx-1">
                            <i className="fab fa-instagram me-2"></i>
                        </a>
                    </div>
                    <div>
                        {/*Resume*/}
                        <a href="/IMGS\Rabbani_Fullstack_Developer.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-1">
                            <i className="fas fa-file-alt me-2"></i> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
