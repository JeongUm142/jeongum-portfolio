import './Navbar.css'

function Navbar({ language, setLanguage }) {
    return (
        <nav className="navbar">
            <div className="nav-logo">JS.</div>

            <div className="nav-menu">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="language-toggle">
                <button
                    className={language === 'kr' ? 'active' : ''}
                    onClick={() => setLanguage('kr')}
                >
                    KR
                </button>

                <button
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                >
                    EN
                </button>
            </div>
        </nav>
    )
}

export default Navbar