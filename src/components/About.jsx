import './About.css'
import SectionHeader from './SectionHeader.jsx'


function About({ language }) {
    const isKorean = language === 'kr'
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
                            {isKorean
                                ? 'ERP 구축과 기업용 업무 시스템 유지보수를 경험하며, 요구사항 분석부터 기능 구현과 운영 이슈 대응까지 다양한 업무를 수행했습니다.'
                                : 'I have experience with ERP implementation and enterprise system maintenance, covering tasks from requirements analysis and feature development to production issue resolution.'
                            }
                        </p>

                        <p>
                            {isKorean
                                ? '사용자 요구사항과 기존 시스템의 흐름을 이해한 뒤 필요한 기능을 구현하고, 이후에도 수정과 확장이 용이한 코드를 작성하는 것을 중요하게 생각합니다.'
                                : 'I focus on understanding user requirements and existing system flows, then implementing practical features with code that is clear, maintainable, and easy to extend.'
                            }
                        </p>

                        <p>
                            {isKorean
                                ? 'Java와 Spring을 중심으로 실무 경험을 쌓아왔으며, 최근에는 React를 활용한 개인 프로젝트를 통해 프론트엔드 개발 역량도 확장하고 있습니다.'
                                : 'My professional experience is centered on Java and Spring, and I am currently expanding my frontend skills through personal projects using React.'
                            }
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
                            <span>Spring Framework · Spring Boot · MyBatis · React · jQuery · AG Grid · RealGrid</span>
                        </div>

                        <div className="skill-row">
                            <strong>Databases</strong>
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
                        <span className="education-year">2019 – 2023 </span>

                        <div>
                            <strong>{isKorean ? '우송대학교' : 'Woosong University'}</strong>
                            <p>
                                {isKorean
                                    ? '글로벌미디어영상학과'
                                    : <>
                                        Bachelor’s Degree in Global Media &
                                        <br />
                                        Communication Arts
                                    </>
                                }
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