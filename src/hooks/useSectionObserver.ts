import { useEffect, useState } from 'react';

export const useSectionObserver = (scrollContainerSelector: string) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const scrollContainer = document.querySelector(scrollContainerSelector);
    if (!scrollContainer) return;

    const sections = document.querySelectorAll('.obs-section');
    const dots = document.querySelectorAll('.dot');

    const observerOptions = {
      root: scrollContainer,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const reveals = entry.target.querySelectorAll('.reveal');
          reveals.forEach((el) => el.classList.add('active'));

          const index = Array.from(sections).indexOf(entry.target);
          dots.forEach((dot) => dot.classList.remove('active'));
          if (dots[index]) {
            dots[index].classList.add('active');
          }
          setActiveSectionId(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [scrollContainerSelector]);

  return activeSectionId;
};
