import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const dot = dotRef.current;
    if (!outer || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      outer.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: 'forwards' }
      );
    };

    const addHoverListeners = () => {
      const interactable = document.querySelectorAll(
        '.hover-target, a, button, [data-cursor="pointer"]'
      );
      interactable.forEach((el) => {
        el.addEventListener('mouseenter', () =>
          document.body.classList.add('cursor-hover')
        );
        el.addEventListener('mouseleave', () =>
          document.body.classList.remove('cursor-hover')
        );
      });
    };

    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outerRef}></div>
    </>
  );
};

export default CustomCursor;

