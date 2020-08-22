import styled from 'styled-components';

export const AvatarImage = styled.img`
  width: 10rem;
`;

export const AvatarImageFeed = styled.img`
  width: 7rem;
  padding: 1.5rem 0 0 1.5rem;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
  padding: 20px;
  background-color: ${props => props.theme.colors.backgroundCard};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.colors.tertiary};
  border-top-right-radius: .8rem;
  border-top-left-radius: .8rem;
`;

export const UserNameText = styled.p`
  color: ${props => props.theme.colors.title};
  font-size: 2rem;
`;

export const ProfessionalizationAreaText = styled.p`
  color: ${props =>  props.theme.colors.textSecondary};
  font-size: 1rem;
`

export const LinkLinkedIn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;


  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.text};
  }

  .link {
    color: ${props => props.theme.colors.primary};
    margin-right: 0.7rem;
  }
`;

export const NumbersContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: ${props => props.theme.colors.backgroundCard};
  margin: 0 20px;
`;

export const NumberRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: ${props => props.theme.colors.tertiary};
  padding: 10px;
`;


export const TextNumber = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

export const TextContent = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

export const NumberLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const PremiumContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  height: 15rem;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${props => props.theme.colors.tertiary};
  background: ${props => props.theme.colors.backgroundCard};
`;

export const PremiumText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

export const PremiumButton = styled.button`
  outline: none;
  border: 0;
  padding: 1.5rem;
  border-radius: 4rem;
  margin-top: 1rem;
`;

export const PremiumButtonText = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  font-weight: bold;
`;