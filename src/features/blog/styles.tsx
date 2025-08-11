import styled, { css } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

const slideDownAnimation = css`
  animation: slideDown 1s ease-in-out forwards;
`;

export const StyledBlogContainer = styled.div<{ $inView?: boolean }>`
  scroll-margin-top: 100px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${responsive.container.desktop};
  padding: ${responsive.spacing.section.desktop} 2rem;

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

  /* 블로그 카드들을 감싸는 컨테이너 */
  & > div {
    display: flex;
    gap: ${responsive.spacing.card.desktop};
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;

    ${media.tablet} {
      gap: 1rem; // iPad에서 3개가 들어갈 수 있도록 간격 줄임
    }

    ${media.mobile} {
      gap: ${responsive.spacing.card.mobile};
      flex-direction: column;
      align-items: center;
    }
  }
`;

// 바깥 래퍼: 등장 애니메이션과 카드 위치만 담당
export const StyledBlogWrapper = styled.div<{
  $inView?: boolean;
  $delay?: number;
}>`
  width: 320px;
  cursor: pointer;

  ${media.tablet} {
    width: 280px; // iPad에서 3개가 들어갈 수 있도록 줄임
  }

  ${media.mobile} {
    width: 100%;
    max-width: 350px;
    margin-bottom: 1.5rem;
  }

  opacity: 0;
  transform: translateY(50px);

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
export const StyledBlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
  cursor: pointer;

  /* 부드러운 전환 효과 */
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* 5% 확대 */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* 그림자 효과 강화 */

    ${media.mobile} {
      transform: scale(1.02); // 모바일에서는 호버 효과 줄임
    }
  }

  &:active {
    transform: scale(0.98); /* 클릭 시 살짝 축소 */
  }

  ${media.mobile} {
    border-radius: 6px;
    &:hover {
      transform: none; // 모바일에서는 호버 효과 제거
    }
    &:active {
      transform: scale(0.98); // 모바일에서도 클릭 효과 유지
    }
  }
`;

// 이미지 포토박스
export const StyledBlogPhotoBox = styled.div`
  height: 220px;
  width: 100%;

  ${media.tablet} {
    height: 200px;
  }

  ${media.mobile} {
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 텍스트를 보여주는 박스
export const StyledBlogTextBox = styled.div`
  background-color: #ffffff;
  color: #343d46;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet} {
    padding: 1.2rem;
  }

  ${media.mobile} {
    padding: 1rem;
  }

  h3 {
    color: #343d46;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    line-height: 1.3;

    ${media.tablet} {
      font-size: 1rem;
    }

    ${media.mobile} {
      font-size: 0.9rem;
    }
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;

    ${media.tablet} {
      font-size: 0.85rem;
    }

    ${media.mobile} {
      font-size: 0.8rem;
      line-height: 1.5;
    }
  }
`;
