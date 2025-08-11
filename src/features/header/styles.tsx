import styled from 'styled-components';
import { media, responsive } from '../../styles/breakpoints';

export const StyledHeader = styled.header<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  height: 60px;

  ${media.tablet} {
    padding: 0rem 1.5rem;
    height: 56px;
  }

  ${media.mobile} {
    padding: 0rem 1rem;
    height: 52px;
  }

  nav {
    display: flex;
    gap: 1.5rem;

    ${media.tablet} {
      gap: 1.2rem;
    }

    ${media.mobile} {
      gap: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    font-size: ${responsive.fontSize.body.desktop};

    ${media.tablet} {
      font-size: ${responsive.fontSize.body.tablet};
    }

    ${media.mobile} {
      font-size: ${responsive.fontSize.body.mobile};
    }

    &:hover {
      color: #007bff;
    }
  }
`;

export const StyledLogo = styled.img`
  height: 50px;
  cursor: pointer;
  margin-right: 2rem;

  ${media.tablet} {
    height: 45px;
    margin-right: 1.5rem;
  }

  ${media.mobile} {
    height: 40px;
    margin-right: 1rem;
  }
`;