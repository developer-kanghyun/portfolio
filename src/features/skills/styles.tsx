import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Container ── */
export const StyledSkillsContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 10% 4rem;
  box-sizing: border-box;
  overflow: hidden;

  ${media.mobile} { padding: 6rem 6% 3rem; }
`;

/* ── Ghost big number ── */
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
  margin-bottom: 2.5rem;

  .section-num {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--accent);
    letter-spacing: 0.12em;
  }
  .divider {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--border-color);
  }
  .section-title {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--text-mono);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
`;

/* ── Subtext ── */
export const StyledCoreDescription = styled.p`
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 460px;
  margin-bottom: 4rem;

  ${media.mobile} { margin-bottom: 2.5rem; }
`;

/* ── Skill list row ── */
export const StyledSkillRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-color);
  cursor: default;
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.6s var(--ease-out) both;

  &:last-child {
    border-bottom: 1px solid var(--border-color);
  }

  /* Fill-line on hover */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--accent);
    transition: width 0.4s var(--ease-out);
  }

  &:hover::after { width: 100%; }

  &:hover .skill-name { color: var(--accent); }
  &:hover .skill-num  { color: var(--accent); }

  .skill-name {
    font-family: var(--font-sans);
    font-size: clamp(1.4rem, 2.6vw, 2.4rem);
    font-weight: 500;
    color: var(--text-primary);
    letter-spacing: -0.03em;
    transition: color 0.25s ease;
  }

  .skill-right {
    display: flex;
    align-items: center;
    gap: 2rem;

    ${media.mobile} { gap: 0.5rem; }
  }

  .skill-tags {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-mono);
    letter-spacing: 0.09em;
    text-transform: uppercase;
    text-align: right;

    ${media.mobile} { display: none; }
  }

  .skill-num {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--border-color);
    letter-spacing: 0.05em;
    transition: color 0.25s ease;
    min-width: 1.8rem;
    text-align: right;
  }
`;

/* ── Decorative arc SVG ── */
export const StyledArcBg = styled.div`
  position: absolute;
  top: -5%;
  right: -8%;
  width: 60%;
  height: 120%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;

  svg { width: 100%; height: 100%; }
`;