import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Container ── */
export const StyledContactContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 10% 8rem;
  box-sizing: border-box;

  ${media.mobile} { padding: 6rem 6% 5rem; }
`;

/* ── Ghost number ── */
export const StyledSectionNumBig = styled.div`
  font-family: var(--font-sans);
  font-size: clamp(7rem, 16vw, 14rem);
  font-weight: 800;
  color: var(--accent-subtle);
  line-height: 1;
  letter-spacing: -0.05em;
  position: absolute;
  top: 1rem;
  left: calc(10% - 2rem);
  user-select: none;
  pointer-events: none;
  opacity: 0.6;

  ${media.mobile} { left: calc(6% - 0.5rem); font-size: 5rem; }
`;

/* ── Section label ── */
export const StyledSectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;

  .section-num  { font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent); letter-spacing: 0.12em; }
  .divider      { font-family: var(--font-mono); font-size: 0.7rem; color: var(--border-color); }
  .section-title{ font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-mono); letter-spacing: 0.14em; text-transform: uppercase; }
`;

/* ── Heading ── */
export const StyledContactHeading = styled.h2`
  font-family: var(--font-sans);
  font-size: clamp(2.4rem, 5vw, 5rem);
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.6rem;
`;

/* ── Serif subtitle ── */
export const StyledContactSubtitle = styled.p`
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--text-secondary);
  margin-bottom: 4rem;
  line-height: 1.6;
`;

/* ── Link list container ── */
export const StyledContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-color);
  position: relative;
  z-index: 1;
`;

/* ── Individual link row ── */
export const StyledContactRow = styled.a`
  display: grid;
  grid-template-columns: 90px 1fr 32px;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--border-color);
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.6s var(--ease-out) both;

  /* Fill line sweep on hover */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.4s var(--ease-out);
  }
  &:hover::after { width: 100%; }

  &:hover .link-label { color: var(--accent); }
  &:hover .link-arrow {
    transform: translate(4px, -4px);
    color: var(--accent);
  }

  /* Type label (EMAIL, GITHUB…) */
  .link-type {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  /* Main link text */
  .link-label {
    font-family: var(--font-sans);
    font-size: clamp(1.1rem, 2vw, 1.8rem);
    font-weight: 500;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    transition: color var(--duration-fast) ease;
  }

  /* Arrow ↗ */
  .link-arrow {
    font-size: 1.1rem;
    color: var(--text-mono);
    opacity: 0.5;
    justify-self: end;
    transition:
      transform var(--duration-mid) var(--ease-out),
      color var(--duration-mid) ease;
  }
`;

/* ── Footer strip ── */
export const StyledFooter = styled.div`
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile} { flex-direction: column; gap: 0.8rem; align-items: flex-start; }

  span {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-mono);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

/* backward compat */
export const StyledContactCardContainer = styled.div``;
export const StyledContactWrapper = styled.div``;
