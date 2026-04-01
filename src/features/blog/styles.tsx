import styled, { css } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

const slideDownAnimation = css`
  animation: slideDown 1s ease-in-out forwards;
`;

export const StyledBlogContainer = styled.div<{ $inView?: boolean }>`
  scroll-margin-top: 100px;
  background-color: transparent;
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
  }

  h1,
  p {
    opacity: 0;
    transform: translateY(-50px);
  }

  h1 {
    color: var(--text-primary);
    font-weight: 800;
    font-size: ${responsive.fontSize.h1.desktop};
    line-height: 1.2;
    margin: 0;
    text-align: center;
    letter-spacing: -0.02em;
    ${({ $inView }) => $inView && slideDownAnimation}

    ${media.tablet} {
      font-size: ${responsive.fontSize.h1.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.h1.mobile};
    }
  }

  p {
    color: var(--text-secondary);
    font-size: ${responsive.fontSize.body.desktop};
    margin-bottom: 3rem;
    text-align: center;
    ${({ $inView }) =>
      $inView &&
      css`
        animation: slideDown 1s ease-in-out 0.1s forwards;
      `}

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
      margin-bottom: 2rem;
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
      margin-bottom: 1.5rem;
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
      gap: 1.5rem;
    }

    ${media.mobile} {
      gap: ${responsive.spacing.card.mobile};
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const StyledBlogWrapper = styled.div<{
  $inView?: boolean;
  $delay?: number;
}>`
  width: 340px;
  cursor: pointer;

  ${media.tablet} {
    width: 300px;
  }

  ${media.mobile} {
    width: 100%;
    max-width: 380px;
    margin-bottom: 0.5rem;
  }

  opacity: 0;
  transform: translateY(50px);

  ${({ $inView, $delay }) =>
    $inView &&
    css`
      animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

export const StyledBlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  overflow: hidden;
  cursor: pointer;

  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease,
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent);
    box-shadow: 0 12px 30px var(--accent-glow);

    img {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  ${media.mobile} {
    &:hover {
      transform: none;
      box-shadow: none;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const StyledBlogPhotoBox = styled.div`
  height: 200px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);

  ${media.tablet} {
    height: 180px;
  }

  ${media.mobile} {
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
`;

export const StyledBlogTextBox = styled.div`
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
    letter-spacing: -0.01em;

    ${media.tablet} {
      font-size: 1.1rem;
    }

    ${media.mobile} {
      font-size: 1rem;
    }
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;

    ${media.tablet} {
      font-size: 0.9rem;
    }

    ${media.mobile} {
      font-size: 0.85rem;
      line-height: 1.5;
    }
  }
`;
