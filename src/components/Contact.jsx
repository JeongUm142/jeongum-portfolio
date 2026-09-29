import './Contact.css'
import SectionHeader from './SectionHeader.jsx'

function Contact() {
    return (
        <section className="contact section-container" id="contact">
            <SectionHeader number="04" title="Contact" />

            <div className="contact-content">
                <div className="contact-message">
                    <h3>Let’s connect.</h3>

                    <p>
                        I’m open to opportunities where I can contribute
                        as a Java web developer and continue growing
                        across backend and full-stack development.
                    </p>
                </div>

                <div className="contact-links">
                    <a href="mailto:jeongum.shin.ca@gmail.com">
                        <span>Email</span>
                        <strong>jeongum.shin.ca@gmail.com</strong>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jeongum-shin-7465a4439/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>LinkedIn</span>
                        <strong>Jeongum Shin</strong>
                    </a>

                    <a
                        href="https://github.com/JeongUm142"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>GitHub</span>
                        <strong>JeongUm142</strong>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact