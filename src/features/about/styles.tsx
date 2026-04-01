import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

/* ── Container ── */
export const StyledAboutContainer = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem 10% 4rem;
  box-sizing: border-box;
  overflow: hidden;

  ${media.mobile} { padding: 6rem 6% 3rem; }
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

/* ── Card grid ── */
export const StyledAboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--border-color);
  position: relative;
  z-index: 1;

  ${media.tablet} { grid-template-columns: 1fr 1fr; }
  ${media.mobile} { grid-template-columns: 1fr; }
`;

/* ── Individual card ── */
export const StyledAboutCard = styled.div`
  padding: 2.5rem 2rem;
  border-right: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: background-color var(--duration-mid) ease;

  &:last-child { border-right: none; }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--accent-subtle);
    opacity: 0;
    transition: opacity var(--duration-mid) ease;
  }
  &:hover::before { opacity: 1; }

  /* Tablet: fix borders */
  ${media.tablet} {
    &:nth-child(2) { border-right: none; }
    &:nth-child(3) { border-right: 1px solid var(--border-color); border-top: 1px solid var(--border-color); grid-column: 1 / -1; }
  }

  ${media.mobile} {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    &:last-child { border-bottom: none; }
  }

  .card-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-mono);
    margin-bottom: 1.8rem;
    position: relative;
    z-index: 1;
  }

  h3 {
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin-bottom: 0.9rem;
    position: relative;
    z-index: 1;
  }

  p {
    font-family: var(--font-sans);
    font-size: 0.86rem;
    color: var(--text-secondary);
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }
`;

/* backward compat */
export const StyledAboutWrapper = styled.div``;
export const StyledAboutPhotoBox = styled.div``;
export const StyledAboutTextBox = styled.div``;
