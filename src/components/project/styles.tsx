import styled from 'styled-components';

// ProjectLinks styles
export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledLink = styled.a`
  color: #6b7280;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #374151;
    text-decoration: underline;
  }
`;