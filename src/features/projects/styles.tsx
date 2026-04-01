import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Container ── */
export const StyledProjectContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 10% 4rem;
  box-sizing: border-box;
  overflow: hidden;

  ${media.mobile} { padding: 6rem 6% 3rem; }
`;

/* ── Ghost number (text-stroke style) ── */
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
export const StyledSectionHeading = styled.h2`
  font-family: var(--font-sans);
  font-size: clamp(2.4rem, 5vw, 5rem);
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.6rem;
`;

/* ── Serif subtitle ── */
export const StyledSectionSubtitle = styled.p`
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--text-secondary);
  margin-bottom: 4rem;
  line-height: 1.6;
`;

/* ── Project card grid ── */
export const StyledProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--border-color);
  position: relative;
  z-index: 1;

  ${media.tablet} { grid-template-columns: repeat(2, 1fr); }
  ${media.mobile} { grid-template-columns: 1fr; }
`;

/* ── Individual card ── */
export const StyledProjectCard = styled.div`
  padding: 2.5rem 2rem 2rem;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.7s var(--ease-out) both;
  transition: background-color var(--duration-mid) ease;

  /* Remove right border on last column */
  &:nth-child(3n)   { border-right: none; }
  /* Remove bottom border on last row */
  &:nth-child(n+4) { border-bottom: none; }

  /* Tablet: 2-col layout fixes */
  ${media.tablet} {
    &:nth-child(3n)   { border-right: 1px solid var(--border-color); }
    &:nth-child(2n)   { border-right: none; }
    &:nth-child(n+3)  { border-bottom: none; }
  }

  ${media.mobile} {
    border-right: none;
    &:last-child { border-bottom: none; }
    &:nth-child(n+3) { border-bottom: 1px solid var(--border-color); }
  }

  /* Fill sweep on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    opacity: 0;
    transition: opacity var(--duration-mid) ease;
  }

  &:hover::before { opacity: 1; }

  &:hover .card-arrow {
    transform: translate(3px, -3px);
    color: var(--accent);
  }

  &:hover h3 { color: var(--accent); }

  /* Badge */
  .card-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 0.58rem;
    color: var(--text-mono);
    letter-spacing: 0.04em;
    position: relative;
    z-index: 1;
  }

  /* Category tag — sits below badge */
  .card-tag {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-mono);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 1rem;
    margin-bottom: 1.4rem;
    position: relative;
    z-index: 1;
  }

  /* Arrow — top-right corner, solo */
  .card-arrow {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 1rem;
    color: var(--text-mono);
    opacity: 0.45;
    transition: transform var(--duration-mid) var(--ease-out), color var(--duration-mid) ease;
    z-index: 1;
  }

  h3 {
    font-family: var(--font-sans);
    font-size: clamp(1.2rem, 1.8vw, 1.7rem);
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    margin-bottom: 0.8rem;
    line-height: 1.2;
    position: relative;
    z-index: 1;
    transition: color var(--duration-fast) ease;
  }

  p {
    font-family: var(--font-sans);
    font-size: 0.88rem;
    font-weight: 400;
    color: var(--text-secondary);
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }
`;

/* backward compat */
export const StyledProject = styled.div``;
export const StyledProjectList = styled.div``;
