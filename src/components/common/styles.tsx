import styled from 'styled-components';

// TechStack component styles
export const StyledTechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const StyledTechIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.2s ease;

  /* 기본 브라우저 툴팁 제거 */
  &[title]:hover::after {
    display: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledTechText = styled.span`
  padding: 0.5rem 0.75rem;
  background: #f3f4f6;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
`;
