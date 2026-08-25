import './Projects.css'
import SectionHeader from "./SectionHeader.jsx";
import ProjectCase from "./ProjectCase.jsx";
import erpImage from '../assets/projects/erpImage.png'
import tmsImage from '../assets/projects/tmsImage.png'


function Projects() {
    return(
        <section className='projects section-container' id='projects'>
            <SectionHeader number="03" title="Projects"/>

            <ProjectCase
                number="01"
                title="ERP System Implementation"
                subtitle="Dealer Operations ERP"
                date="Sep 2025 – Jan 2026"
                image={erpImage}
                imageCaption="ERP system screen. Sensitive business data has been obscured."
                team="2 Developers"
                scope="Analysis · Design · Development · Launch"
                overview="Delivered a new ERP system for an external client as part of a two-developer team, contributing from business analysis and design through development, launch, and initial stabilization."
                contributions={[
                    'Analyzed ERP workflows and defined functional requirements.',
                    'Designed database tables and Figma-based UI flows.',
                    'Developed frontend screens and Spring Boot APIs, integrating them within the application.',
                    'Built data-focused screens using AG Grid for operational workflows.'
                ]}
                techStack={[
                    'Java',
                    'Spring Boot',
                    'MyBatis',
                    'MariaDB',
                    'JavaScript',
                    'jQuery',
                    'AG Grid',
                    'Figma'
                ]}
                outcome="Successfully launched the ERP system and supported its initial stabilization for production use."
            />

            <ProjectCase
                reverse
                number="02"
                title="TMS Implementation"
                subtitle="Transportation Management System"
                date="Apr 2025 – Jun 2025"
                image={tmsImage}
                scope="Business Analysis · Database Design · UI Design"
                overview="Contributed to the planning and design of a new transportation management system by analyzing dispatch, transportation, and settlement workflows and translating business requirements into system and UI designs."
                contributions={[
                    'Analyzed dispatch, transportation, and settlement workflows to define system requirements.',
                    'Designed permission structures and database tables based on business processes.',
                    'Defined UI structures and designed list and detail screens in Figma.'
                ]}
                techStack={[
                    'Figma'
                ]}
                outcome="Defined core workflows, data structures, and UI specifications to support the development of the new TMS."
            />
        </section>


    )
}

export default Projects