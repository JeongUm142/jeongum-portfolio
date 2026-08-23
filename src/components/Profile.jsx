import './Profile.css'

function Profile() {
    return (

        <section className="profile">
            <div className="hero">
                <div className="name-block">
                    <p className="job-title">Java Web Developer</p>

                    <h1 className="title">
                        <span>Jeongum</span>
                        <span>Shin</span>
                    </h1>
                </div>

                <div className="divider"></div>

                <p className="intro">
                    I’m a Java web developer focused on building reliable, maintainable business applications.
                    <br/>I enjoy solving practical problems and improving systems through thoughtful development.
                </p>

            </div>

        </section>

        )
    }

export default Profile