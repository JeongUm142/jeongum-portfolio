import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">JS.</div>

            <div className="nav-menu">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar