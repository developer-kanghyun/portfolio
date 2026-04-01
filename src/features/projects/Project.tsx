import { useState, useRef, useEffect } from 'react';

interface Highlight { label: string; body: string; }
interface Stat { n: string; desc: string; }

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  overview: string;
  features: string[];
  stack: string[];
  highlights: Highlight[];
  stats?: Stat[];
  liveLink?: string;
  githubLink?: string;
  img: string;
  imgs?: string[];
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'The Habit',
    subtitle: 'PWA 기반 습관 트래커 서비스',
    role: '5인 팀 · Full-Stack · DevOps · DB Design',
    overview: '모바일 퍼스트 PWA로 제작한 습관 트래커 서비스. 오프라인에서도 동작하며 Web Push 알림으로 리마인드 기능을 제공합니다. Clean Architecture를 적용하여 비즈니스 로직과 UI를 완전히 분리했습니다.',
    features: [
      '습관 생성·수정·삭제 및 달성 기록 캘린더',
      'Web Push API 기반 푸시 알림 시스템',
      'PWA 설치 지원 (모바일 홈 화면 추가) 담당',
      'NextAuth.js 소셜 로그인 (Google, GitHub)',
      'Clean Architecture — Domain / Application / Infrastructure 분리',
      'GitHub Actions CI/CD 파이프라인 직접 구축 담당',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'TanStack Query', 'Zustand', 'NextAuth.js', 'AWS S3', 'Web Push', 'GitHub Actions', 'PWA'],
    highlights: [
      { label: 'Clean Architecture', body: 'Domain 레이어 완전 독립. 서버/클라이언트 상태 명확히 분리.' },
      { label: 'DevOps & Infra', body: 'CI/CD 파이프라인 구축, 커스텀 도메인 구매·DNS 설정, Prisma ERD 설계 주도.' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/the-habit',
    img: '/images/habit-1.png',
    imgs: ['/images/habit-1.png', '/images/habit-2.png'],
  },
  {
    id: '02',
    title: 'Interview Mate',
    subtitle: 'AI 면접 연습 플랫폼',
    role: 'Solo Dev · Full-Stack',
    overview: 'AI 면접관과 실전처럼 면접 연습을 할 수 있는 풀스택 플랫폼. Next.js 14 + Spring Boot 3.2 구성. FSD + Clean Architecture에 AI 레이어를 결합한 독자적 구조로 설계했습니다. 전체 개발을 TDD로 진행했습니다.',
    features: [
      'FSD + Clean Architecture + AI Layer 3계층 결합 설계',
      'AI 레이어 — 프롬프트 관리·모델 추상화·응답 스트리밍 분리',
      'TDD — Red-Green-Refactor 사이클로 전체 개발 진행',
      'Testcontainers로 실제 PostgreSQL 환경 통합 테스트',
      'Redis (Caffeine + Redis) 2-tier 캐싱',
    ],
    stack: ['Next.js 14', 'Spring Boot 3.2', 'Java 21', 'PostgreSQL', 'Redis', 'WebFlux', 'Playwright', 'Testcontainers'],
    highlights: [
      { label: 'FSD + Clean + AI Layer', body: 'Feature-Sliced Design에 Clean Architecture와 AI 레이어를 결합. 높은 응집도·낮은 결합도.' },
      { label: 'TDD Development', body: '전체 개발을 TDD로 진행. Red-Green-Refactor 사이클로 안정적인 코드 품질 확보.' },
      { label: '2-tier Caching', body: '로컬 Caffeine + 분산 Redis 2단계 캐싱으로 반복 요청 최적화.' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/Interview-mate',
    liveLink: 'https://web-lsgmyg67g-developer-kanghyuns-projects.vercel.app/',
    img: '/images/interview-cover.png',
    imgs: ['/images/interview-1.png', '/images/interview-2.png'],
  },
  {
    id: '03',
    title: 'Weather Check',
    subtitle: '한국 지명 기반 날씨 조회 서비스',
    role: 'Solo Dev · Full-Stack',
    overview: '한국 지명을 자연어로 검색하면 날씨를 조회해주는 서비스. 외국 API의 한국 지명 인식 한계를 3단계 Fallback 전략으로 해결. Optimistic UI 패턴으로 즉각적인 사용자 응답을 구현했습니다.',
    features: [
      '한국 지명 자연어 검색 + 3단계 fallback',
      '"강남구" → "서울 강남" → "Gangnam Seoul" 단계별 시도로 99%+ 인식률 달성',
      '현재 날씨 / 시간별 / 7일 예보',
      '즐겨찾기 즉시 반영 (Optimistic UI) — API 응답 전에 UI 업데이트',
      'TanStack Query v5 stale-while-revalidate 캐싱',
    ],
    stack: ['React 18', 'TypeScript', 'TanStack Query v5', 'Tailwind CSS', 'Context API', 'React Router v6', 'Vite'],
    highlights: [
      { label: '3-Tier Korean Search Fallback', body: '"강남구" → "서울 강남" → "Gangnam Seoul" — 단계별 시도로 99%+ 한국 지명 인식률 달성' },
      { label: 'Optimistic UI Pattern', body: '즐겨찾기 추가·삭제 시 API 응답 전에 UI 즉시 반영 → 체감 응답속도 대폭 향상' },
    ],
    liveLink: 'https://weather-check-beta.vercel.app',
    githubLink: 'https://github.com/developer-kanghyun/Weather-Check',
    img: '/images/weather-cover.png',
    imgs: ['/images/weather-1.png', '/images/weather-2.png'],
  },
  {
    id: '04',
    title: 'Flic Flow',
    subtitle: 'OTT 통합 검색 최적화 서비스',
    role: 'Solo Dev · Frontend · DevOps',
    overview: '넷플릭스·왓챠 등 여러 OTT 플랫폼의 콘텐츠를 통합 검색하는 서비스. 클라이언트 사이드 캐싱과 API 최적화로 성능을 크게 향상시켰습니다.',
    features: [
      'OTT 통합 검색 및 필터링 (장르·플랫폼·평점)',
      'React Query 캐싱으로 중복 API 호출 90% 제거',
      'Intersection Observer 기반 무한 스크롤',
      'Route-level code splitting + dynamic import로 FCP 3.2s → 1.8s',
      'Docker + Nginx 컨테이너 배포',
    ],
    stack: ['React', 'TypeScript', 'React Query', 'Vite', 'Docker', 'Nginx'],
    highlights: [
      { label: 'Caching Strategy', body: 'stale-while-revalidate로 네트워크 요청 최소화. API 호출 90% 감소.' },
      { label: 'Bundle Optimization', body: 'Route-level code splitting + dynamic import로 FCP 3.2s → 1.8s.' },
    ],
    stats: [
      { n: '44%', desc: '성능 향상' },
      { n: '90%', desc: 'API 호출 감소' },
      { n: '1.8s', desc: 'FCP (3.2s→1.8s)' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/flic-flow',
    liveLink: 'https://www.flicflow.xyz',
    img: '/images/flic-cover.png',
    imgs: ['/images/flic-1.png', '/images/flic-2.png'],
  },
  {
    id: '05',
    title: 'Portfolio',
    subtitle: '개인 포트폴리오 웹사이트',
    role: 'Solo Dev · Frontend · Design System',
    overview: 'React + TypeScript로 설계한 에디토리얼 스타일 포트폴리오 웹사이트. Brutalist 타이포그래피와 기하학 배경 애니메이션을 결합한 독자적 디자인 시스템을 구축했습니다. 100vh Scroll Snap 기반의 섹션 구조와 커스텀 커서, 모달 기반 프로젝트 뷰어로 인터랙티브한 UX를 구현했습니다.',
    features: [
      'Brutalist Editorial Design System — 독자적 타이포그래피 & 컬러 시스템 직접 설계',
      'Hero Typography — skewX + italic 변형으로 임팩트 있는 타이틀 연출',
      '3D Geometric ScrollWireframe — Canvas 없이 CSS로 구현한 배경 와이어프레임 애니메이션',
      'Custom SVG Cursor — 포인터/호버 상태별 커서 직접 제작',
      'Intersection Observer 스크롤 애니메이션 — reveal / delay 클래스 기반',
      '100vh Scroll Snap + 모달 기반 프로젝트 갤러리 뷰어',
    ],
    stack: ['React', 'TypeScript', 'Styled-Components', 'Vite', 'Intersection Observer', 'CSS Animation'],
    highlights: [
      { label: 'Design System from Scratch', body: '외부 UI 라이브러리 없이 디자인 토큰·타이포그래피·컬러 시스템을 직접 설계. 일관된 브랜드 언어 구현.' },
      { label: 'Editorial Typography', body: 'skewX 변형 + italic 조합으로 에디토리얼 감성의 Hero 타이틀 구현. 픽셀 디테일까지 튜닝.' },
      { label: 'CSS Geometric Animation', body: 'Canvas/WebGL 없이 순수 CSS로 와이어프레임 기하학 도형 배니메이션 구현. Z축 rotateZ + translate 조합.' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/portfolio',
    liveLink: 'https://www.kanghyun.dev',
    img: '/images/portfolio-cover.png',
    imgs: ['/images/portfolio-1.png', '/images/portfolio-2.png'],
  },
  {
    id: '06',
    title: 'High-Yield Trading',
    subtitle: '실시간 주식 자동매매 풀스택 플랫폼',
    role: 'Solo Dev · Full-Stack · DevOps',
    overview: 'KIS(한국투자증권) API와 연동한 실시간 주식 자동매매 시스템. 멀티 브로커 어댑터 패턴으로 브로커 교체가 유연하며, Socket.IO 스트리밍으로 주가 변동을 즉시 반영합니다.',
    features: [
      '자동매매 전략 설정 및 실시간 포지션 모니터링',
      'KIS API 연동 — 실시간 체결가 스트리밍',
      'IBrokerAdapter 인터페이스 추상화 → 브로커 교체 시 비즈니스 로직 변경 없음',
      'Socket.IO + Bull Queue로 주가 데이터 실시간 처리',
      'Docker Compose 멀티 서비스 오케스트레이션',
      'Prometheus + Grafana 모니터링 대시보드',
    ],
    stack: ['Next.js 16', 'NestJS 10', 'TypeScript', 'PostgreSQL 16', 'Prisma', 'Redis 7', 'Socket.IO', 'Docker Compose', 'Prometheus', 'Grafana', 'GCP VM'],
    highlights: [
      { label: 'Multi-Broker Adapter Pattern', body: 'IBrokerAdapter 인터페이스 추상화 → KIS API 교체 시 비즈니스 로직 변경 없음' },
      { label: 'Real-time WebSocket Streaming', body: 'Socket.IO + Bull Queue로 주가 데이터 실시간 처리 및 자동매매 신호 발생' },
      { label: 'Monitoring', body: 'Prometheus 메트릭 수집 + Grafana 시각화. GCP VM + Docker 프로덕션 배포.' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/high-yield-trading-system',
    liveLink: 'https://dashboard-olive-gamma-59.vercel.app/',
    img: '/images/lynx-cover.png',
    imgs: ['/images/lynx-1.png', '/images/lynx-2.jpg'],
  },
  {
    id: '07',
    title: 'TtaBook',
    subtitle: 'Canvas 기반 비주얼 공간 예약 시스템',
    role: '4인 팀 · Frontend Lead · Architecture',
    overview: 'React Konva(Canvas API)를 활용한 시각적 공간 예약 플랫폼. 사무실·스터디룸 등의 공간을 드래그&드롭으로 배치하고 실시간으로 예약 상태를 확인합니다.',
    features: [
      'React Konva Canvas 공간 배치 에디터',
      '드래그&드롭으로 좌석·룸 시각적 배치',
      'Supabase Realtime 예약 상태 동기화',
      'Canvas 에디터 핵심 구현 담당',
      '공간 배치 상태 관리 (Zustand) 담당',
      'Clean Architecture 구조 설계 담당',
    ],
    stack: ['Next.js 15', 'React Konva', 'TypeScript', 'TanStack Query', 'Zustand', 'Supabase', 'CSS Modules'],
    highlights: [
      { label: 'Canvas Editor', body: 'React Konva로 복잡한 좌석 배치 UI 구현. 마우스 이벤트 기반 드래그&드롭.' },
      { label: 'Realtime Sync', body: 'Supabase Realtime으로 여러 유저의 예약 상태 실시간 동기화. 충돌 방지.' },
    ],
    githubLink: 'https://github.com/developer-kanghyun/Ttabook',
    img: '/images/ttabook-cover.png',
    imgs: ['/images/ttabook-admin.png', '/images/ttabook-booking.png'],
  },
];

const PLACEHOLDER = 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState<Project>(PROJECTS[0]);

  const galleryRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  const openModal = (project: Project) => {
    setActive(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <span className="kicker">03 / Works</span>
          <h2>Projects</h2>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', paddingBottom: '0.5rem' }}>
          <button className="gallery-nav-btn hover-target" onClick={handleScrollLeft}>
            &lt;
          </button>
          <button className="gallery-nav-btn hover-target" onClick={handleScrollRight}>
            &gt;
          </button>
        </div>
      </div>

      <div
        className="works-gallery reveal delay-1"
        ref={galleryRef}
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="work-item hover-target"
            onClick={(e) => { e.stopPropagation(); openModal(project); }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="work-img"
              onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
            />
            <div className="work-meta">
              <span className="skill-meta" style={{ display: 'block', marginBottom: '4px' }}>{project.id}</span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: 500 }}>{project.title}</h3>
              <span className="skill-meta" style={{ fontSize: '0.65rem' }}>{project.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} id="project-modal">
        <button className="close-btn hover-target" onClick={closeModal}>✕</button>
        <div className="modal-content">

          {/* LEFT: Image */}
          <div className="modal-img-container">
            {active.imgs && active.imgs.length > 0 ? (
              active.imgs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${active.title} ${i + 1}`}
                  onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
                />
              ))
            ) : (
              <img
                id="modal-img"
                src={active.img}
                alt={active.title}
                onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
              />
            )}
          </div>

          {/* RIGHT: Info */}
          <div className="modal-info">
            <span className="skill-meta" style={{ color: 'var(--accent)', marginBottom: '0.5rem', display: 'block' }}>{active.role}</span>
            <h2 style={{ wordBreak: 'keep-all', marginBottom: '0.5rem' }}>{active.title}</h2>
            <p className="skill-meta" style={{ marginBottom: '2rem' }}>{active.subtitle}</p>

            {/* Stats (Flic Flow) */}
            {active.stats && (
              <div className="modal-stats">
                {active.stats.map((s) => (
                  <div key={s.desc} className="modal-stat-box">
                    <div className="modal-stat-n">{s.n}</div>
                    <div className="skill-meta">{s.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="modal-section-label">Overview</div>
            <p className="body-large" style={{ color: 'var(--fg)', opacity: 0.8, fontWeight: 400, lineHeight: 1.7, wordBreak: 'keep-all', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              {active.overview}
            </p>

            {/* Key Features */}
            <div className="modal-section-label">Key Features</div>
            <ul className="modal-feat-list">
              {active.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="modal-section-label">Tech Stack</div>
            <div className="modal-stack-tags">
              {active.stack.map((s) => (
                <span key={s} className="modal-stack-tag">{s}</span>
              ))}
            </div>

            {/* Highlights */}
            <div className="modal-section-label">Highlights</div>
            {active.highlights.map((h) => (
              <div key={h.label} className="modal-highlight-card">
                <div className="modal-highlight-label">{h.label}</div>
                <div className="modal-highlight-body">{h.body}</div>
              </div>
            ))}

            {/* Action Links */}
            <div className="modal-section-label">Links</div>
            <div className="modal-actions">
              {active.liveLink && (
                <a
                  href={active.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn hover-target"
                >
                  Visit Live Site ↗
                </a>
              )}
              {active.githubLink && (
                <a
                  href={active.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-link-btn hover-target"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Project;
