import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

/* ── Sticky header bar ── */
export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 2rem 4rem;
  box-sizing: border-box;
  z-index: 50;
  pointer-events: none;

  /* subtle blur/fade so it lifts off content below */
  backdrop-filter: blur(0px);

  ${media.tablet} { padding: 1.5rem 2.5rem; }
  ${media.mobile} { padding: 1.2rem 1.25rem; grid-template-columns: 1fr auto 1fr; }

  nav {
    display: flex;
    gap: 2.5rem;
    pointer-events: auto;

    ${media.mobile} { gap: 1rem; }

    a {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      font-weight: 400;
      color: var(--text-mono);
      text-decoration: none;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      transition: color var(--duration-fast) ease;
      white-space: nowrap;

      &:hover { color: var(--accent); }
    }
  }

  .status-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    pointer-events: none;

    ${media.mobile} { display: none; }

    span {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      color: var(--text-mono);
      letter-spacing: 0.07em;
      line-height: 1.5;
    }
  }
`;

/* ── Center circle icon (indigo dot inside ring) ── */
export const StyledCursorIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  justify-self: center;
  transition: border-color var(--duration-mid) ease;

  &::after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent-glow);
  }
`;

/* ── Fixed left-side section dots ── */
export const StyledSectionDots = styled.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 9px;
  z-index: 60;
  pointer-events: none;

  ${media.mobile} { display: none; }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--border-color);
    transition:
      background-color var(--duration-mid) ease,
      transform var(--duration-mid) ease,
      box-shadow var(--duration-mid) ease;

    &.active {
      background: var(--accent);
      transform: scale(1.5);
      box-shadow: 0 0 6px var(--accent-glow);
    }
  }
`;