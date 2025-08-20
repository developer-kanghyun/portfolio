import styled, { css } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

const slideDownAnimation = css`
  animation: slideDown 1s ease-in-out forwards;
`;

export const StyledProjectContainer = styled.div<{ $inView: boolean }>`
  scroll-margin-top: 100px;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${responsive.spacing.section.desktop} 2rem;
  width: ${responsive.container.desktop};

  ${media.tablet} {
    width: ${responsive.container.tablet};
    padding: ${responsive.spacing.section.tablet} 1.5rem;
  }

  ${media.mobile} {
    width: ${responsive.container.mobile};
    padding: ${responsive.spacing.section.mobile} 1rem;
    border-radius: 8px;
  }

  h1,
  p {
    opacity: 0;
    transform: translateY(-50px);
  }

  h1 {
    color: #343d46;
    font-weight: bolder;
    font-size: ${responsive.fontSize.h1.desktop};
    line-height: 1.2;
    margin: 0;
    text-align: center;
    ${({ $inView }) => $inView && slideDownAnimation}

    ${media.tablet} {
      font-size: ${responsive.fontSize.h1.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.h1.mobile};
    }
  }

  p {
    color: #9b9b9b;
    font-size: ${responsive.fontSize.body.desktop};
    margin-bottom: 2rem;
    text-align: center;
    ${({ $inView }) =>
      $inView &&
      css`
        animation: slideDown 1s ease-in-out 0.1s forwards;
      `}

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
      margin-bottom: 1.5rem;
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
      margin-bottom: 1rem;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const StyledProjectList = styled.div`
  display: flex;
  justify-content: center;
  gap: ${responsive.spacing.card.desktop};
  width: 100%;
  flex-wrap: wrap;

  ${media.tablet} {
    gap: 1rem; // iPad에서 3개가 들어갈 수 있도록 간격 줄임
  }

  ${media.mobile} {
    gap: ${responsive.spacing.card.mobile};
    flex-direction: column;
    align-items: center;
  }
`;

// 바깥 래퍼: 등장 애니메이션과 레이아웃만 담당
export const StyledProject = styled.div<{ $inView: boolean; $delay?: number }>`
  width: 320px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(50px);

  ${media.tablet} {
    width: 280px; // iPad에서 3개가 들어갈 수 있도록 줄임
  }

  ${media.mobile} {
    width: 100%;
    max-width: 350px;
  }

  ${({ $inView, $delay }) =>
    $inView &&
    css`
      animation: slideUp 1s ease-in-out forwards;
      animation-delay: ${$delay || 0}s;
    `}

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// 안쪽 래퍼: 실제 카드 디자인과 호버 효과를 담당
export const StyledProjectContentWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 400px;

  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    ${media.mobile} {
      transform: scale(1.02); // 모바일에서는 호버 효과를 줄임
    }
  }

  ${media.tablet} {
    min-height: 380px;
  }

  ${media.mobile} {
    min-height: 350px;
    border-radius: 6px;
    &:hover {
      transform: none; // 모바일에서는 호버 효과 제거
    }
  }
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const StyledProjectInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: center;
  position: relative;

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #343d46;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
    opacity: 1;
    transform: none;
    word-wrap: break-word;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.4;

    ${media.mobile} {
      word-break: break-word;
      font-size: 0.9rem;
    }
  }
`;

// FlicFlow 특별 헤더 스타일
export const StyledFlicFlowHeader = styled.div`
  height: 220px;
  background: #ff8502;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 180px;
  }

  h3 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;

    ${media.tablet} {
      font-size: 2.2rem;
    }

    ${media.mobile} {
      font-size: 1.8rem;
    }
  }
`;

// 포트폴리오 특별 헤더 스타일
export const StyledPortfolioHeader = styled.div`
  height: 220px;
  background: #343d46;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 180px;
  }

  h3 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;

    ${media.tablet} {
      font-size: 2.2rem;
    }

    ${media.mobile} {
      font-size: 1.8rem;
    }
  }
`;

// TtaBook 특별 헤더 스타일
export const StyledTtaBookHeader = styled.div`
  height: 220px;
  background: #c3cf8f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 180px;
  }

  h3 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;

    ${media.tablet} {
      font-size: 2.2rem;
    }

    ${media.mobile} {
      font-size: 1.8rem;
    }
  }
`;

// 기술 스택 푸터 스타일 (아래쪽 오른쪽 배치, 한 줄로 나열)
export const StyledTechStackFooter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  
  /* TechStack 컨테이너를 한 줄로 나열 */
  .tech-stack-container {
    display: flex !important;
    flex-wrap: nowrap !important;
    justify-content: flex-end;
    align-items: center;
    gap: 0.3rem !important;
    max-width: none !important;
    margin-top: 0 !important;
  }

  /* TechStack 컴포넌트 내부 아이콘 크기 조정 */
  img {
    width: 24px !important;
    height: 24px !important;
  }
`;

// 색깔 헤더 카드용 기술 스택 스타일 (헤더 내 왼쪽 아래)
export const StyledColorCardTechStack = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;

  /* TechStack 컴포넌트 내부 아이콘 크기 조정 */
  img {
    width: 24px !important;
    height: 24px !important;
  }

  /* TechStack 컨테이너 간격 조정 */
  > div {
    gap: 0.3rem !important;
    margin-top: 0 !important;
  }
`;

// 색깔 헤더 카드 공용 설명 스타일 (헤더 아래 왼쪽 정렬)
export const StyledFlicFlowDescription = styled.div`
  padding: 2rem 1.5rem;
  text-align: left;
  flex-grow: 1;
  margin-bottom: 3rem;

  ${media.tablet} {
    padding: 1.5rem 1.2rem;
    margin-bottom: 2.5rem;
  }

  ${media.mobile} {
    padding: 1.2rem 1rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin: 0 0 20px 0;
    font-size: ${responsive.fontSize.h3.desktop};
    color: #343d46;
    font-weight: 600;

    ${media.tablet} {
      font-size: ${responsive.fontSize.h3.tablet};
      margin-bottom: 15px;
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.h3.mobile};
      margin-bottom: 12px;
    }
  }

  p {
    margin: 0;
    font-size: ${responsive.fontSize.body.desktop};
    color: #666;
    line-height: 1.5;
    word-wrap: break-word;
    word-break: keep-all;
    overflow-wrap: break-word;

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
      line-height: 1.4;
      word-break: break-word;
    }
  }
`;
