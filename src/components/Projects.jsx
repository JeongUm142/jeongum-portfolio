import './Projects.css'
import SectionHeader from "./SectionHeader.jsx";
import ProjectCase from "./ProjectCase.jsx";
import erpImage from '../assets/projects/erpImage.png'

function Projects({ language }) {
    const isKorean = language === 'kr'
    return(
        <section className='projects section-container' id='projects'>
            <SectionHeader number="03" title="Projects"/>

            <ProjectCase
                number="01"
                title={isKorean ? 'ERP 시스템 구축' : 'ERP System Implementation'}
                subtitle={isKorean ? '대리점 운영 ERP' : 'Dealer Operations ERP'}
                date={isKorean ? '2025.09 – 2026.02' : 'Sep 2025 – Feb 2026'}
                image={erpImage}
                imageCaption={
                    isKorean
                        ? 'ERP 시스템 화면. 민감한 업무 정보는 가림 처리했습니다.'
                        : 'ERP system screen. Sensitive business data has been obscured.'
                }
                team={isKorean ? '개발자 2명' : '2 Developers'}
                scope={
                    isKorean
                        ? '업무 분석 · UI/DB 설계 · 개발 · 초기 안정화'
                        : 'Business Analysis · UI/DB Design · Development · Stabilization'
                }
                overview={
                    isKorean
                        ? '외부 고객사의 신규 ERP 시스템 구축 프로젝트에 2인 개발팀의 일원으로 참여해 업무 분석, 설계, 개발 및 초기 안정화 과정을 함께했습니다.'
                        : 'Contributed to the implementation of a new ERP system for an external client as part of a two-developer team, covering business analysis, design, development, and initial stabilization.'
                }
                contributions={
                    isKorean
                        ? [
                            'ERP 업무 프로세스를 분석하고 기능 요구사항을 정의했습니다.',
                            '데이터베이스 테이블을 설계하고, Figma를 활용해 UI 화면을 설계했습니다.',
                            'AG Grid를 활용한 데이터 중심의 ERP 화면을 개발하고, Spring Boot와 MyBatis로 해당 기능의 백엔드 로직을 구현했습니다.'
                        ]
                        : [
                            'Analyzed ERP workflows and defined functional requirements.',
                            'Designed database tables and UI screens in Figma.',
                            'Developed data-intensive ERP screens using AG Grid and implemented the corresponding backend logic with Spring Boot and MyBatis.'
                        ]
                }
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
                outcome={
                    isKorean
                        ? '담당 ERP 기능을 구현하고, 초기 안정화 과정에서 확인된 이슈와 수정사항을 반영하며 시스템 안정화에 기여했습니다.'
                        : 'Implemented assigned ERP functionality and addressed issues and required changes during the initial stabilization phase.'
            }
            />

            <ProjectCase
                reverse
                number="02"
                title={isKorean ? '통합 업무 운영 시스템' : 'Integrated Business Operations System'}
                subtitle={isKorean ? '기업 업무 시스템 운영 및 유지보수' : 'Enterprise Operations & Maintenance'}
                date={isKorean ? '2023.12 – 2026.03' : 'Dec 2023 – Mar 2026'}
                scope={isKorean ? '유지보수 · 풀스택 개발 · 운영 지원' : 'Maintenance · Full-Stack Development · Production Support'}
                overview={
                    isKorean
                        ? '모회사 및 계열사에서 사용하는 기업용 업무 시스템을 유지보수하며, 프론트엔드, 백엔드, Oracle DB 영역의 기능 개선을 수행했습니다.'
                        : 'Maintained and enhanced an enterprise operations system used across a parent company and its affiliates, working across frontend, backend, and Oracle database components.'
                }
                contributions={
                    isKorean
                        ? [
                            '사용자 요청사항과 기존 시스템 흐름을 분석하여 필요한 변경사항과 영향 범위를 파악했습니다.',
                            '프론트엔드 화면, 백엔드 로직, Oracle SQL 쿼리를 구현하고 수정했습니다.',
                            'RealGrid를 활용한 데이터 중심의 업무 화면을 개발하고 수정했습니다.',
                            '오류를 재현하고 콘솔 로그와 SQL 쿼리를 확인하여 운영 중 발생한 문제를 분석하고 해결했습니다.',
                            '기존 배차 시스템 연동 API를 수정하여 배차지별 재고 현황과 입출고 내역 등 추가 정보를 전달할 수 있도록 연동 기능을 확장했습니다.',
                            '배포 대상 코드를 반영하고 당일 배포 내역을 정리·공유했으며, 배포 후 이슈 발생 시 관련 코드를 수정해 재배포용 변경사항을 전달했습니다.'
                        ]
                        : [
                            'Analyzed user requests and existing system flows to identify required changes and their impact.',
                            'Implemented and modified frontend screens, backend logic, and Oracle SQL queries.',
                            'Built and modified data-oriented business screens using RealGrid.',
                            'Investigated production issues by reproducing errors and reviewing console logs and SQL queries.',
                            'Enhanced an existing API integration with the dispatch system to provide additional data, including inventory levels and inbound/outbound history by dispatch location.',
                            'Prepared assigned code changes for release, coordinated the day’s release items, and addressed post-release issues by submitting corrected changes for redeployment.'
                        ]
                }
                techStack={[
                    'Java',
                    'Spring Framework',
                    'JSP',
                    'JavaScript',
                    'Oracle',
                    'SQL',
                    'RealGrid'
                ]}
                outcome={
                    isKorean
                        ? '연간 80건 이상의 버그 수정 및 기능 개선 요청을 처리하며 업무 시스템의 안정적인 운영을 지원했습니다.'
                        : 'Handled 80+ bug-fix and feature-enhancement requests annually, supporting reliable day-to-day operation of the enterprise system.'
                }
            />

        </section>




    )
}

export default Projects