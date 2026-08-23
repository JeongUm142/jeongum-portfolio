import './About.css'
import SectionHeader from './SectionHeader.jsx'


function About() {
    return(
        <section className="about section-container" id="about">

            {/* Section Number + Title */}
            <SectionHeader number="01" title="About" />

            {/* About Me + Technical Skills */}
            <div className='about-grid'>
                {/* About-me */}
                <div className='About-me'>
                    <h3 className="about-subtitle">ABOUT ME</h3>

                    <div className="about-text">
                        <p>
                            I’m a Java web developer with experience building and maintaining
                            enterprise web applications.
                        </p>

                        <p>
                            I’ve worked on both new development and existing systems, mainly focusing
                            on backend development while also handling frontend changes when needed.
                        </p>

                        <p>
                            I enjoy building practical features based on user needs and keeping code clear and maintainable.
                            <br/>I’m continuing to expand my frontend skills alongside my Java and Spring experience.
                        </p>
                    </div>
                </div>

                {/* technical-skills */}
                <div className='technical-skills'>
                    <h3 className="about-subtitle">TECHNICAL SKILLS</h3>

                    <div className="skill-list">

                        <div className="skill-row">
                            <strong>Languages</strong>
                            <span>Java · JavaScript · SQL</span>
                        </div>

                        <div className="skill-row">
                            <strong>Frameworks & Libraries</strong>
                            <span>Spring Framework · Spring Boot · MyBatis · jQuery · AG Grid · RealGrid</span>
                        </div>

                        <div className="skill-row">
                            <strong>Database</strong>
                            <span>Oracle · MariaDB</span>
                        </div>

                        <div className="skill-row">
                            <strong>Web Technologies</strong>
                            <span>JSP · HTML · CSS</span>
                        </div>

                        <div className="skill-row">
                            <strong>Tools & <br/>Environment</strong>
                            <span>GitLab · SVN · IntelliJ IDEA · Eclipse · <span className="no-break">Apache Tomcat</span> · Ubuntu · Figma</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Education + Certifications */}
            <div className="about-bottom">

                <div className="education">
                    <h3 className="about-subtitle">Education</h3>

                    <div className="education-item">
                        <span className="education-year">Apr – Sep 2023</span>

                        <div>
                            <strong>Goodee Academy</strong>
                            <p>Java Web Developer Training Program</p>
                        </div>
                    </div>

                    <div className="education-item">
                        <span className="education-year">2019 – 2023 </span>

                        <div>
                            <strong>Woosong University</strong>
                            <p>
                                Bachelor’s Degree in Global Media &<br/> Communication Arts
                            </p>
                        </div>
                    </div>
                </div>


                <div className="certifications">
                    <h3 className="about-subtitle">Certifications</h3>

                    <div className="certification-item">
                        <span>2025</span>
                        <p>Linux Master Level 2</p>
                    </div>

                    <div className="certification-item">
                        <span>2023</span>
                        <p>SQLD (SQL Developer)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About