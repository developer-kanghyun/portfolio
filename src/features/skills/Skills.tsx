import { useState, useRef, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData, type Skill } from '../../data/skills';
import {
  StyledCategory,
  StyledSkill,
  StyledSkillsContainer,
  StyledSkillsWrapper,
  StyledSkillList,
  StyledFilterList,
  StyledFilterButton,
  StyledFilterHighlight,
} from './styles';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const filterCategories = useMemo(
    () => ['All', ...Array.from(new Set(skillsData.map((data) => data.category)))],
    [],
  );
  const filteredSkills =
    activeFilter === 'All'
      ? skillsData
      : skillsData.filter((data) => data.category === activeFilter);


  const [highlightStyle, setHighlightStyle] = useState({});
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = filterCategories.indexOf(activeFilter);
    const activeButton = buttonRefs.current[activeIndex];
    if (activeButton) {
      setHighlightStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeFilter, filterCategories]);

  return (
    <StyledSkillsContainer id="skills" ref={ref} $inView={inView}>
      <h1>기술 스택</h1>
      <p>다음과 같은 기술을 사용할 수 있습니다.</p>

      <StyledFilterList $inView={inView}>
        <StyledFilterHighlight style={highlightStyle} />
        {filterCategories.map((category, index) => (
          <StyledFilterButton
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            key={category}
            $isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </StyledFilterButton>
        ))}
      </StyledFilterList>

{filteredSkills.map((data, index) => (
        <StyledSkillsWrapper
          key={data.category}
          $inView={inView}
          $delay={0.3 + index * 0.2}
        >
          <StyledCategory>{data.category}</StyledCategory>
          <StyledSkillList>
            {data.name.map((skill: Skill) => (
              <StyledSkill key={skill.name}>
                <img src={skill.icon} alt={`${skill.name} icon`} />
                <span>{skill.name}</span>
              </StyledSkill>
            ))}
          </StyledSkillList>
        </StyledSkillsWrapper>
      ))}
    </StyledSkillsContainer>
  );
};

export default Skills;