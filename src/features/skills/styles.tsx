import styled, { css } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

const slideDownAnimation = css`
  animation: slideDown 1s ease-in-out forwards;
`;

export const StyledSkillsContainer = styled.div<{ $inView: boolean }>`
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

  ${media.tablet} {
    > div:last-child {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      flex-wrap: wrap;
    }
  }

  ${media.mobile} {
    > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
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
    margin-bottom: 1.25rem;
    text-align: center;
    ${({ $inView }) =>
      $inView &&
      css`
        animation: slideDown 1s ease-in-out 0.1s forwards;
      `}

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
      margin-bottom: 1rem;
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
      margin-bottom: 0.8rem;
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

export const StyledFilterList = styled.div<{ $inView: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c0c5ce;
  border-radius: 20px;
  padding: 5px;
  margin-bottom: 2rem;

  opacity: 0;
  transform: translateY(-50px);

  ${({ $inView }) =>
    $inView &&
    css`
      animation: slideDown 1s ease-in-out 0.2s forwards;
    `}
`;

export const StyledFilterHighlight = styled.div`
  position: absolute;
  top: 5px;
  bottom: 5px;
  background-color: #65737e;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  z-index: 0;
`;

export const StyledFilterButton = styled.button<{ $isActive: boolean }>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.$isActive ? '#ffffff' : '#333333')};
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease-in-out;

  ${media.tablet} {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  ${media.mobile} {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  &:hover {
    color: ${(props) => (props.$isActive ? '#ffffff' : '#000000')};
  }
`;

export const StyledSkillsWrapper = styled.div<{
  $inView: boolean;
  $delay?: number;
}>`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 85%;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  min-height: 80px; /* 카드 최소 높이 줄임 */

  ${media.tablet} {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    width: 45%;
  }

  ${media.mobile} {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  opacity: 0;
  transform: translateY(50px);

  ${({ $inView, $delay }) =>
    $inView &&
    css`
      animation: slideUp 1s ease-in-out forwards;
      animation-delay: ${$delay || 0}s;
    `}

  ${media.tablet} {
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
    }
  }

  ${media.mobile} {
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
      transform: none;
    }
  }

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

export const StyledCategory = styled.div`
  color: #343d46;
  font-weight: bold;
  font-size: ${responsive.fontSize.h2.desktop};
  width: 30%;
  min-width: 150px;

  ${media.tablet} {
    font-size: ${responsive.fontSize.h2.tablet};
    width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  ${media.mobile} {
    font-size: ${responsive.fontSize.h2.mobile};
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const StyledSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 70%;

  ${media.tablet} {
    width: 100%;
    gap: 10px;
    justify-content: center;
  }

  ${media.mobile} {
    width: 100%;
    gap: 8px;
    justify-content: center;
  }
`;

// All 선택시 태그 스타일 스킬
export const StyledTagSkill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  padding: 0.75rem 1rem;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #e9ecef;
    border-color: #ced4da;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  ${media.mobile} {
    padding: 0.6rem 0.8rem;
    font-size: 12px;
    
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StyledSkill = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  width: 60px;
  text-align: center;

  ${media.tablet} {
    width: 55px;
    gap: 5px;
  }

  ${media.mobile} {
    width: 50px;
    gap: 4px;
  }

  img {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease-in-out;

    ${media.tablet} {
      width: 36px;
      height: 36px;
    }

    ${media.mobile} {
      width: 32px;
      height: 32px;
    }
  }

  span {
    font-size: 12px;
    color: #343d46;
    transition: transform 0.2s ease-in-out;

    ${media.tablet} {
      font-size: 11px;
    }

    ${media.mobile} {
      font-size: 10px;
    }
  }

  &:hover {
    img {
      transform: scale(1.15);

      ${media.mobile} {
        transform: scale(1.1);
      }
    }
    span {
      transform: scale(1.2);

      ${media.mobile} {
        transform: scale(1.1);
      }
    }
  }
`;