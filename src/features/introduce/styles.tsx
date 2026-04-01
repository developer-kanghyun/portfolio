import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/breakpoints';

const revealUp = keyframes`
  from { opacity: 0; transform: translateY(40px); clip-path: inset(0 0 100% 0); }
  to   { opacity: 1; transform: translateY(0);    clip-path: inset(0 0 0% 0); }
`;

const revealFade = keyframes`
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const revealRight = keyframes`
  from { opacity: 0; transform: translateX(12px); }
  to   { opacity: 1; transform: translateX(0); }
`;

/* ── Container ── */
export const StyledIntroduceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
  min-height: 580px;
  display: flex;
  overflow: hidden;
`;

/* ── Parallax circles in background ── */
export const StyledParallaxBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 900px;
  pointer-events: none;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 100%; height: 100%;
    border-radius: 50%;
    border: 1px solid var(--pattern-color);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 62%; height: 62%;
    border-radius: 50%;
    border: 1px solid var(--pattern-color);
  }
`;

/* ── Diagonal grid overlay — very faint ── */
export const StyledGridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
  background-image:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%);
`;

/* ── Hero title block ── */
export const StyledHeroContent = styled.div`
  position: absolute;
  top: 44%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 10;

  ${media.tablet} { left: 8%; }
  ${media.mobile} { left: 6%; top: 45%; }

  /* SYSTEM INITIALIZE label */
  .sys-init {
    position: relative;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--accent);
    letter-spacing: 0.18em;
    margin-bottom: 2rem;
    margin-left: 28px;
    text-transform: uppercase;
    animation: ${revealFade} 0.7s var(--ease-out) 0.1s both;

    ${media.mobile} { font-size: 0.65rem; margin-bottom: 1.2rem; }

    /* Animated blinking dot before label */
    &::before {
      content: '';
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px var(--accent-glow);
      animation: pulse 2.2s ease-in-out infinite;
    }
  }

  h1 {
    font-family: var(--font-sans);
    font-weight: 800;
    font-size: clamp(4rem, 9vw, 11rem);
    line-height: 0.88;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    margin: 0;

    /* Each line clips up on load */
    .line {
      display: block;
      overflow: hidden;

      span {
        display: block;
        animation: ${revealUp} 0.9s var(--ease-out) both;
      }
    }

    .line-1 span { animation-delay: 0.25s; }

    .line-2 span {
      animation-delay: 0.4s;
      font-weight: 300;
      opacity: 0.7;
      letter-spacing: -0.02em;
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
    50%       { opacity: 0.4; transform: translateY(-50%) scale(0.7); }
  }
`;

/* ── Bottom-right quote ── */
export const StyledBottomQuote = styled.div`
  position: absolute;
  bottom: 12%;
  right: 10%;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1rem, 1.6vw, 1.5rem);
  line-height: 1.6;
  color: var(--text-secondary);
  text-align: right;
  z-index: 10;
  letter-spacing: 0.01em;
  animation: ${revealRight} 1s var(--ease-out) 0.7s both;

  ${media.tablet}  { right: 8%; }
  ${media.mobile}  { right: 6%; bottom: 8%; text-align: left; left: 6%; }
`;

/* ── Small corner label (bottom left) ── */
export const StyledBottomLeft = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: 10;

  ${media.mobile} { display: none; }

  span {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-mono);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: ${revealFade} 0.8s var(--ease-out) 0.9s both;
  }
`;

/* ── Left section dots (kept for backward compat if needed) ── */
export const StyledLeftDots = styled.div`
  position: absolute;
  left: -22px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;

  .dot {
    width: 3px; height: 3px;
    border-radius: 50%;
    background: var(--border-color);

    &.active {
      background: var(--accent);
      box-shadow: 0 0 6px var(--accent-glow);
    }
  }
`;
