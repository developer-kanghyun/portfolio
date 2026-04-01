import { styled } from 'styled-components';

/* ── Outer Viewport (now full-screen seamless canvas) ── */
export const StyledOuterViewport = styled.div`
  background-color: var(--bg-viewport);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0; /* Removed artificial padding/borders */
  box-sizing: border-box;
`;

/* ── Floating Card (now acting as the seamless main body Wrapper) ── */
export const StyledCardContainer = styled.div`
  background-color: transparent; /* Match the pure background */
  width: 100%;
  max-width: 100vw; /* Use full width */
  min-height: 100vh;
  border-radius: 0; /* Remove floating box feel */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* No shadow, purely flat layout */
  box-shadow: none;
  /* Removed old static pseudo-rings to make way for dynamic ScrollWireframe */
`;

/* ── Inner Scroll Area (hides scrollbar, scrolls sections) ── */
export const StyledScrollArea = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
  scroll-behavior: smooth;

  /* hide scrollbar cross-browser */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

/* ── Section Wrapper ── */
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;

  /* Thin top rule between every section except first */
  &:not(:first-child) {
    border-top: 1px solid var(--border-color);
  }
`;
