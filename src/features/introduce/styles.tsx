import { styled } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

export const StyledIntroduceContainer = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-bottom: 5rem;
  text-align: center;
  width: ${responsive.container.desktop};
  gap: 2rem;

  ${media.tablet} {
    width: ${responsive.container.tablet};
    height: 80vh;
    gap: 1.5rem;
  }

  ${media.mobile} {
    width: ${responsive.container.mobile};
    height: 70vh;
    border-radius: 8px;
    gap: 1rem;
  }

  h1 {
    animation: slideDown 1.5s ease-in-out;
    font-size: 4rem;
    color: #343d46;
    font-weight: bold;
    animation-fill-mode: forwards; // 애니메이션이 끝난 후에도 최종 상태를 유지
    margin: 0;
    line-height: 1.2;

    ${media.tablet} {
      font-size: 3rem;
    }

    ${media.mobile} {
      font-size: 2.2rem;
    }
  }

  p {
    animation: slideDown 1.8s ease-in-out;
    animation-delay: 0.6s;
    font-size: 2rem;
    color: #9b9b9b;
    opacity: 0; // 시작 시점에 보이지 않도록 설정
    animation-fill-mode: forwards;
    margin: 0;
    line-height: 1.4;

    ${media.tablet} {
      font-size: 1.5rem;
    }

    ${media.mobile} {
      font-size: 1.1rem;
    }
  }

  span {
    font-size: 4rem;
    line-height: 2.5rem;
    color: blue;

    ${media.tablet} {
      font-size: 3rem;
      line-height: 2rem;
    }

    ${media.mobile} {
      font-size: 2.2rem;
      line-height: 1.5rem;
    }
  }
`;
