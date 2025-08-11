// --- 기존 데이터 아래에 추가 ---

export interface ProjectData {
  id: number;
  title: string;
  image: string;
  summary: string;
  details: string;
  description?: string;
  period?: string;
  links?: {
    live?: string;
    github?: string;
  };
  techStack: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Flic Flow',
    image: '/images/project2.png',
    summary: '개인 맞춤형 영화 추천 플랫폼입니다.',
    description:
      '"오늘 뭐 보지?"라는 일상적인 고민을 기술로 해결하는 개인화 콘텐츠 추천 플랫폼입니다. 수많은 OTT 서비스와 영화 속에서, 사용자 맞춤 필터링과 직관적인 인터페이스를 통해 취향에 맞는 콘텐츠를 빠르고 자연스럽게 발견할 수 있도록 돕습니다.',
    period: '2025년 5월 10일 ~ (개인 프로젝트)',
    links: {
      live: 'https://flicflow.xyz',
      github: 'https://github.com/developer-kanghyun/movie-net',
    },
    details:
      'OTT 필터링, 끊김 없는 콘텐츠 탐색, 찜 목록 관리 등 사용자 경험 중심의 핵심 기능들을 통해 완성된 영화 추천 플랫폼입니다.',
    techStack: [
      'React',
      'TypeScript',
      'Styled-Components',
      'Vite',
      'Docker',
      'Nginx',
      'Ubuntu',
    ],
  },
  {
    id: 2,
    title: '포트폴리오 웹사이트',
    image: '/images/project1.png',
    summary: '개인 기술 스택과 프로젝트를 소개하는 반응형 웹사이트입니다.',
    description:
      '개발자로서의 역량을 어필하기 위한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 부드러운 애니메이션을 통해 시각적 만족도를 높였으며, 모달 기반의 상세보기로 깊이 있는 정보를 체계적으로 전달합니다.',
    period: '2025년 5월 ~ 6월 (개인 프로젝트)',
    links: {
      github: 'https://github.com/developer-kanghyun/portpolio',
    },
    details:
      '반응형 디자인, 동적 애니메이션, 모달 기반 상세보기 등의 기능을 통해 사용자에게 인상적인 경험을 제공하는 포트폴리오입니다.',
    techStack: ['React', 'TypeScript', 'Vite', 'Styled-Components'],
  },
  {
    id: 3,
    title: 'TtaBook',
    image: '/images/ttabook.png',
    summary: '스마트한 공간 예약 시스템입니다.',
    description:
      '복잡하고 번거로운 공간 예약 과정을 개선한 웹 기반 예약 플랫폼입니다. 2D 캔버스를 활용한 시각적 인터페이스로 실제 공간을 직관적으로 파악할 수 있으며, 실시간 동기화를 통해 여러 사용자가 동시에 사용해도 충돌 없는 안정적인 예약 환경을 제공합니다.',
    period: '2025년 7월 (팀 프로젝트)',
    links: {
      github: 'https://github.com/developer-kanghyun/ttabook',
    },
    details:
      '시각적 공간 관리, 실시간 예약 상태 동기화, Clean Architecture 패턴 등을 통해 확장 가능하고 안정적인 공간 예약 시스템입니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'React Konva',
      'TanStack Query',
      'Supabase',
    ],
  },
];
