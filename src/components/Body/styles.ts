import styled from 'styled-components';


export const Container = styled.div`
  

  @media(min-width: 1328px) {
    display:flex;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
  }

  @media(min-width: 1120px) {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "aside-left content aside-right";

    
    .aside-left {
      grid-area: aside-left;
    }

    main {
      grid-area: content
    }

    .aside-right {
      grid-area: aside-right;
    }
  }

`;

export const AvatarImageFeed = styled.img`
  width: 7rem;
  padding: 1.5rem 0 0 1.5rem;
`;


export const AvatarImage = styled.img`
  width: 10rem;
`;

interface UserName {
  colorBackground?: string;
  colorText?: string;
  colorLine?: string;
}


export const UserNameText = styled.p`
  color: ${props => props.theme.colors.title};
  font-size: 2rem;
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

export const ContainerFeed = styled.div`
  display: flex;
  flex: 1;
  margin: 20px 20px 0 20px;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundCard};
`;


export const TextsIcons = styled.p`
  font-weight: bold;
  font-size: 10px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const ContainerInternalIcons = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;