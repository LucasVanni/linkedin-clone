import styled from 'styled-components';

export const ContentButtons = styled.div`
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex: 1;
  margin: 0 20px;
  background: ${props => props.theme.colors.backgroundCard};
`;

export const TextInputPublication = styled.textarea`
  max-width: 52rem;
  min-width: 52rem;
  min-height: 5rem;
  max-height: 10rem;
  border: none;
  outline: none;
  height: 7rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding-top: 1rem;
  padding-left: 1rem; 
  color: ${props => props.theme.colors.subText};
  background: ${props => props.theme.colors.backgroundCard};
  border-bottom: 2px solid ${props => props.theme.colors.textSecondary};
 
  ::placeholder { 
    opacity: 0.7;
    color:  ${props => props.theme.colors.textSecondary};
  } 
`;

export const ContentPublications = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  flex: 1;
  padding: 2rem 2rem 0 2rem;
  flex-direction: column;
`;


export const ButtonPublications = styled.button`
  padding: 5px 10px;
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: 0;
`;

export const TextButtonPublications = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.text};
`;

