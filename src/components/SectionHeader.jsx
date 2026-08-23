import './SectionHeader.css'

function SectionHeader({ number, title }) {
    return (
        <div className="section-header">
            <div className="section-label">
                <div className="section-divider"></div>
                <span className="section-number">{number}</span>
            </div>

            <h2 className="section-title">{title}</h2>
        </div>
    )
}

export default SectionHeader