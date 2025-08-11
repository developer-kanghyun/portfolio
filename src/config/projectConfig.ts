export interface ProjectConfig {
  headerColor: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PROJECT_CONFIGS: Record<number, ProjectConfig> = {
  1: {
    headerColor: '#ff8502',
    title: 'FlicFlow',
    subtitle: '영화 추천 플랫폼',
    description: '사용자의 OTT 구독 서비스에 맞춰 시청 가능한 콘텐츠를 필터링하여 추천하는 플랫폼입니다.'
  },
  2: {
    headerColor: '#343d46',
    title: 'Portfolio',
    subtitle: '포트폴리오 웹사이트',
    description: '개인 포트폴리오 웹사이트이며,\n미니멀한 디자인과 부드러운 애니메이션으로 소개합니다.'
  },
  3: {
    headerColor: '#c3cf8f',
    title: 'TtaBook',
    subtitle: '스마트한 공간 예약 시스템',
    description: '2D 캔버스를 통해 공간을 표현하고, 사용자가 공간을 선택하고 예약할 수 있는 플랫폼입니다.'
  }
};

export const ANIMATION_CONFIG = {
  INITIAL_DELAY: 0.3,
  DELAY_INCREMENT: 0.2,
  THRESHOLD: 0.1,
} as const;