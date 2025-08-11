// 브레이크포인트 정의
export const BREAKPOINTS = {
  mobile: 480,    // iPhone (최대 480px)
  tablet: 768,    // iPad (481px ~ 768px)
  desktop: 1024,  // Desktop (769px 이상)
} as const;

// 미디어 쿼리 유틸리티 함수
export const media = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.tablet + 1}px)`,
  
  // 모바일과 태블릿을 합친 경우
  mobileAndTablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
  
  // 태블릿과 데스크톱을 합친 경우  
  tabletAndDesktop: `@media (min-width: ${BREAKPOINTS.mobile + 1}px)`,
} as const;

// 반응형 값 유틸리티
export const responsive = {
  // 폰트 사이즈
  fontSize: {
    h1: {
      mobile: '1.8rem',   // 2rem에서 줄임
      tablet: '2.5rem', 
      desktop: '3rem'
    },
    h2: {
      mobile: '1.3rem',   // 1.5rem에서 줄임
      tablet: '1.8rem',
      desktop: '2rem'
    },
    h3: {
      mobile: '1.1rem',   // 1.2rem에서 줄임
      tablet: '1.4rem', 
      desktop: '1.5rem'
    },
    body: {
      mobile: '0.85rem',  // 0.9rem에서 줄임
      tablet: '1rem',
      desktop: '1.1rem'
    }
  },
  
  // 간격
  spacing: {
    section: {
      mobile: '2rem',
      tablet: '3rem',
      desktop: '4rem'
    },
    card: {
      mobile: '1rem',
      tablet: '1.5rem', 
      desktop: '2rem'
    }
  },
  
  // 컨테이너 너비
  container: {
    mobile: '95%',
    tablet: '90%',
    desktop: '80%'
  }
} as const;