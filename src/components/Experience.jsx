import './Experience.css'
import SectionHeader from "./SectionHeader.jsx";

function Experience({language, setLanguage}) {
    const isKorean = language === 'kr'
    return(
        <section className='experience section-container' id="experience">
            <SectionHeader number="02" title="Experience" />

            <div className="experience-company">
                <div>
                    <h3>NPC System Co., Ltd.</h3>
                    <p>{isKorean ? '소프트웨어 개발자' : 'Software Developer'}</p>
                </div>

                <div className="experience-meta">
                    <span>{isKorean ? '2023.11 – 2026.04' : 'Nov 2023 – Apr 2026'}</span>
                    <span>{isKorean ? '대한민국' : 'South Korea'}</span>
                </div>
            </div>

            <div className="experience-list">
                <div className="experience-item">
                    <span className="experience-item-number">01</span>

                    <h4>
                        {isKorean
                            ? <>운영 시스템 유지보수<br />& 운영 지원</>
                            : <>Operations <br />& Production Support</>
                        }
                    </h4>
                    <p>
                        {isKorean
                            ? '프론트엔드, 백엔드, Oracle DB 영역 전반에서 기업용 업무 시스템을 유지보수하고 기능을 개선했습니다. 오류를 재현하고 콘솔 로그와 SQL 쿼리를 확인하여 문제를 분석하고 해결했습니다.'
                            : 'Maintained and enhanced enterprise web applications across frontend, backend, and Oracle database components. Investigated issues by reproducing errors and reviewing console logs and SQL queries.'
                        }
                    </p>
                </div>

                <div className="experience-item">
                    <span className="experience-item-number">02</span>

                    <h4>
                        {isKorean ? 'ERP 시스템 구축' : 'ERP Implementation'}
                    </h4>
                    <p>
                        {isKorean
                            ? '신규 ERP 시스템 구축에 참여하여 요구사항 분석, 데이터베이스 및 UI 설계, 개발, 초기 안정화 과정까지 함께했습니다.'
                            : 'Contributed to a new ERP system implementation, covering requirements analysis, database and UI design, development, and initial stabilization.'                        }
                    </p>
                </div>

                <div className="experience-item">
                    <span className="experience-item-number">03</span>

                    <h4>
                        {isKorean
                            ? '외부 API 연동'
                            : 'External API Integration'
                        }
                    </h4>

                    <p>
                        {isKorean
                            ? '기존 배차 시스템 연동 API를 수정하여 배차지별 재고 현황과 입출고 내역 등 추가 정보를 전달할 수 있도록 연동 기능을 확장했습니다.'
                            : 'Enhanced an existing API integration with the dispatch system to provide additional data, including inventory levels and inbound/outbound history by dispatch location.'
                        }
                    </p>
                </div>

                <div className="experience-item">
                    <span className="experience-item-number">04</span>

                    <h4>
                        {isKorean
                            ? 'TMS 기획 및 설계'
                            : 'TMS Planning & Design'
                        }
                    </h4>

                    <p>
                        {isKorean
                            ? '배차·운송·정산 업무 프로세스를 분석하고, 이를 바탕으로 권한 구조와 데이터베이스 테이블을 설계했으며 Figma를 활용해 목록 및 상세 화면을 설계했습니다.'
                            : 'Analyzed dispatch, transportation, and settlement workflows, designed permission structures and database tables based on the requirements, and created list and detail screens in Figma.'
                        }
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Experience