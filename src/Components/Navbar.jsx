import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link to="/home" className="navbar-brand">RABBANI</Link>
                    
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feedback" className="nav-link">Feedback</Link>
                            </li>
                        </ul>
                    </div>

                    <div id="buttons">
                        <button className="btn btn-outline-success" type="submit" id="left-btn">Login</button>
                        <button className="btn btn-outline-success" type="submit">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
