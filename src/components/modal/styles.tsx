import styled from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

// Modal styles
export const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const StyledModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${media.tablet} {
    width: 95%;
    padding: 2.5rem;
    border-radius: 12px;
    max-height: 90vh;
  }

  ${media.mobile} {
    width: 95%;
    padding: 1.5rem;
    border-radius: 8px;
    max-height: 95vh;
    margin: 1rem;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: ${responsive.fontSize.h1.desktop};
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.2;
    text-shadow: 0 0 1px rgba(26, 26, 26, 0.5);

    ${media.tablet} {
      font-size: ${responsive.fontSize.h1.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.h1.mobile};
    }
  }

  h3 {
    font-size: ${responsive.fontSize.h3.desktop};
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    margin-top: 2rem;

    ${media.tablet} {
      font-size: ${responsive.fontSize.h3.tablet};
      margin-top: 1.5rem;
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.h3.mobile};
      margin-top: 1.2rem;
    }
  }

  p {
    color: #6b7280;
    line-height: 1.6;
    font-size: ${responsive.fontSize.body.desktop};

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
      line-height: 1.5;
    }
  }
`;

export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  //background: #f3f4f6;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.2s ease;

  ${media.tablet} {
    top: 1.2rem;
    right: 1.2rem;
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }

  ${media.mobile} {
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  &:hover {
    background: #e5e7eb;
    color: #374151;
    transform: scale(1.05);

    ${media.mobile} {
      transform: none; // 모바일에서는 호버 효과 제거
    }
  }
`;

// ProjectDetailModal styles
export const StyledSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export const StyledInfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const StyledPeriodSection = styled.div`
  flex: 0.5;

  h3 {
    margin-bottom: 0.75rem;
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

export const StyledLinksSection = styled.div`
  flex-shrink: 0;

  h3 {
    margin-bottom: 0.75rem;
    margin-top: 0;
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e7eb;
  margin: 2rem 0;
`;

// FlicFlowDetails styles
export const StyledDetailsContainer = styled.div``;

export const StyledDetailsTitle = styled.h3``;

export const StyledDetailsIntro = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-top: 1rem;
`;

export const StyledFeaturesList = styled.ul`
  font-size: 1.05rem;
  line-height: 1.7;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

export const StyledFeatureItem = styled.li`
  margin-bottom: 0.75rem;
`;

// ProjectDetailModal specific styles
export const StyledDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  white-space: pre-line;
`;

export const StyledPeriodText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

export const StyledTechSection = styled.div`
  .tech-stack-container {
    display: flex !important;
    flex-wrap: nowrap !important;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
    max-width: none !important;
    overflow-x: auto;

    /* 스크롤바 완전히 숨기기 (hover 시 회색 #C1C1C1 부분 제거) */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Firefox용 스크롤바 숨기기 */
    scrollbar-width: none;
  }
`;

export const StyledDetailsText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin-top: 1rem;
  white-space: pre-line;
`;

// New FlicFlowDetails styles
export const StyledFeatureSection = styled.div`
  margin-bottom: 2rem;
`;

export const StyledFeatureHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }
`;

export const StyledFeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledFeatureImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
`;

export const StyledFeatureText = styled.div``;

export const StyledFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledFeatureListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;

  strong {
    font-weight: 700;
    color: #333;
  }
`;
