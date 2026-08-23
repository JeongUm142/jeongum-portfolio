import './Experience.css'
import SectionHeader from "./SectionHeader.jsx";

function Experience() {
    return(
        <section className='experience section-container' id="experience">
            <SectionHeader number="02" title="Experience" />

            <div className="experience-company">
                <div>
                    <h3>NPC System Co., Ltd.</h3>
                    <p>Software Developer</p>
                </div>

                <div className="experience-meta">
                    <span>Nov 2023 – Mar 2026</span>
                    <span>South Korea</span>
                </div>
            </div>

            <div className="experience-list">
                <div className="experience-item">
                    <span className="experience-item-number">01</span>

                    <h4>Operations <br/>& Production Support</h4>
                    <p>
                        Maintained and enhanced enterprise web applications across frontend, backend, and Oracle database components.
                        Investigated issues by reproducing errors and reviewing console logs and SQL queries.
                    </p>
                </div>

                <div className="experience-item">
                    <span className="experience-item-number">02</span>

                    <h4>ERP Implementation</h4>
                    <p>
                        Contributed to the development and launch of a new ERP system,
                        covering requirements analysis, database and UI design,
                        implementation, deployment, and initial stabilization.
                    </p>
                </div>

                <div className="experience-item">
                    <span className="experience-item-number">03</span>

                    <h4>API Integration & TMS</h4>
                    <p>
                        Developed and modified external-system integration APIs and
                        contributed to transportation management system analysis,
                        data-flow design, and Figma-based screen design.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Experience