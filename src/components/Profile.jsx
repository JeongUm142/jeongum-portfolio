import './Profile.css'

function Profile({language, setLanguage}) {
    const isKorean = language === 'kr'
    return (

        <section className="profile">
            <div className="hero">
                <div className="name-block">
                    <p className="job-title">Java Web Developer</p>

                    <h1 className="title">
                        {isKorean
                            ? <span className="title-kr">
                                <span>신</span>
                                <span>정</span>
                                <span>음</span>
                              </span>
                            : <span>Jeongum</span>
                        }
                        {!isKorean && <span>Shin</span>}
                    </h1>
                </div>

                <div className="divider"></div>

                <p className="intro">
                    {isKorean
                        ? '기업용 웹 시스템의 신규 개발과 유지보수를 경험한 Java 웹 개발자 신정음입니다.'
                        : 'I’m a Java web developer focused on building reliable, maintainable business applications.'
                    }

                    <br />

                    {isKorean
                        ? '백엔드를 중심으로 프론트엔드와 데이터베이스 영역까지 함께 개발해 왔습니다.'
                        : 'I enjoy solving practical problems and improving systems through thoughtful development.'
                    }
                </p>



            </div>

        </section>

        )
    }

export default Profile