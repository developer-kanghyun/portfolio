import { styled } from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

export const StyledContactContainer = styled.div`
  scroll-margin-top: 100px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 2rem;

  ${media.tablet} {
    padding: 3rem 1.5rem;
  }

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`;

export const StyledContactCardContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #4d4d4d;
  font-size: ${responsive.fontSize.body.desktop};
  font-weight: bolder;
  width: 85%;
  height: 35vh;
  padding: 3rem 2.5rem;

  ${media.tablet} {
    width: 80%;
    padding: 2.5rem 2rem;
    height: 30vh;
    font-size: ${responsive.fontSize.body.tablet};
  }

  ${media.mobile} {
    width: 90%;
    padding: 2rem 1.5rem;
    height: 25vh;
    font-size: ${responsive.fontSize.body.mobile};
  }

  a {
    color: #4d4d4d;
    text-decoration: underline;
    font-size: inherit;
  }
`;

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 0;
`;
