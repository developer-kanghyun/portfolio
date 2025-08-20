import styled, { css } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

const slideDownAnimation = css`
  animation: slideDown 1s ease-in-out forwards;
`;

export const StyledAboutContainer = styled.div<{ $inView: boolean }>`
  scroll-margin-top: 100px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 4rem 2rem;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    width: 90%;
    padding: 3rem 1.5rem;
  }

  ${media.mobile} {
    width: 95%;
    padding: 2rem 1rem;
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

  > div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    ${media.tablet} {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    ${media.mobile} {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
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

export const StyledAboutPhotoBox = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  ${media.tablet} {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 8px;
  }

  ${media.mobile} {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledAboutTextBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-size: 1.125rem;
  padding: 1.2rem;
  word-wrap: break-word;
  word-break: keep-all;
  overflow-wrap: break-word;

  ${media.tablet} {
    flex: 1;
    padding: 0;
    font-size: ${responsive.fontSize.body.tablet};
    line-height: 1.6;
  }

  ${media.mobile} {
    padding: 0;
    font-size: ${responsive.fontSize.body.mobile};
    line-height: 1.5;
    word-break: break-word;
  }
`;

export const StyledAboutWrapper = styled.div<{
  $inView: boolean;
  $delay?: number;
}>`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem;
  margin-bottom: 5rem;
  width: 30%;

  ${media.tablet} {
    width: 80%;
    margin-bottom: 2rem;
    flex-direction: row;
    padding: 1.5rem;
    gap: 1.2rem;
    min-height: 120px;
  }

  ${media.mobile} {
    width: 100%;
    margin-bottom: 1rem;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    min-height: 100px;
    text-align: center;
  }

  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
  transition-delay: ${({ $delay }) => $delay || 0}s;

  ${({ $inView }) =>
    $inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;

    ${media.mobile} {
      transform: none;
    }
  }
`;
