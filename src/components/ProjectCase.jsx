import './ProjectCase.css'

function ProjectCase({
                         number,
                         title,
                         subtitle,
                         date,
                         image,
                         imageCaption,
                         team,
                         scope,
                         overview,
                         contributions,
                         techStack,
                         outcome,
                         reverse = false
                     }) {
    return (
        <article className={`project-case ${reverse ? 'reverse' : ''}`}>
            <div className="project-case-header">
                <span className="project-case-number">{number}</span>

                <div>
                    <h3 className="project-case-title">{title}</h3>
                    <p className="project-case-subtitle">{subtitle}</p>
                </div>

                <span className="project-case-date">{date}</span>
            </div>

            <div className="project-case-content">
                <div className="project-media">
                    <img src={image} alt={`${title} screenshot`} />

                    <p className="project-image-caption">
                        {imageCaption}
                    </p>

                    {(team || scope) && (
                        <div className="project-context">
                            <span className="project-info-label">Project Context</span>

                            {team && (
                                <div className="project-context-row">
                                    <strong>Team</strong>
                                    <span>{team}</span>
                                </div>
                            )}

                            {scope && (
                                <div className="project-context-row">
                                    <strong>Scope</strong>
                                    <span>{scope}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="project-info">
                    <div className="project-info-block">
                        <span className="project-info-label">Overview</span>
                        <p>{overview}</p>
                    </div>

                    <div className="project-info-block">
                        <span className="project-info-label">
                            My Role & Contribution
                        </span>

                        <ul>
                            {contributions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-info-block">
                        <span className="project-info-label">Tech Stack</span>

                        <div className="project-tech-list">
                            {techStack.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="project-info-block">
                        <span className="project-info-label">Outcome</span>
                        <p>{outcome}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCase