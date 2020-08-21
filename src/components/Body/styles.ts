import styled from 'styled-components';


export const Container = styled.div`
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


export const AvatarImage = styled.img`
  width: 10rem;
`;

interface UserName {
  colorBackground?: string;
  colorText?: string;
  colorLine?: string;
}


export const UserNameContainer = styled.div<UserName>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 0 20px;
  padding: 20px;
  background-color: ${props => props.colorBackground};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.colorText};
`;

export const UserNameText = styled.p`
  color: #011627;
  font-size: 2rem;
`;

export const ProfessionalizationAreaText = styled.p<UserName>`
  color: ${props =>  props.theme.colors.textSecondary};
  font-size: 1rem;
`

export const LinkLinkedIn = styled.div<UserName>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;


  a {
    text-decoration: none;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.textSecondary};
  }

  .link {
    margin-right: 0.7rem;
  }
`;

export const NumbersContent = styled.div<UserName>`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background: ${props => props.colorBackground};
  margin: 0 20px;
  
`;

export const NumberRight = styled.div<UserName>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: ${props => props.colorLine};
  padding: 10px;
`;

export const NumberLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const TextNumber = styled.p<UserName>`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

export const TextContent = styled.p<UserName>`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
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


export const ContentPublications = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 2rem 0 2rem;
  flex-direction: column;
`;

export const TextInputPublication = styled.input`
  border: none;
  outline: none;
  height: 4rem;
  padding-left: 1rem; 
  color: ${props => props.theme.colors.subText};
  background: ${props => props.theme.colors.backgroundCard};
  border-bottom: 2px solid ${props => props.theme.colors.textSecondary};

  ::placeholder { 
    color:  ${props => props.theme.colors.textSecondary};
  }  
`;

export const ButtonPublications = styled.button`
  padding: 5px 10px;
  background: transparent;
  color: ${props => props.theme.colors.secondary};
  border: 0;
`;

export const TextButtonPublications = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.secondary};
`;

export const ContentButtons = styled.div`
  display: flex;
  flex: 1;
  margin: 0 20px;
  background: ${props => props.theme.colors.backgroundCard};
`;

export const ContainerFeed = styled.div`
  display: flex;
  flex: 1;
  margin: 20px 20px 0 20px;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundCard};
`;

export const AvatarImageFeed = styled.img`
  width: 7rem;
  padding: 1.5rem 0 0 1.5rem;
`;

export const FeedTextsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;

export const ContainerFeedAvatar = styled.div`
  display: flex;
  flex: 1;
`;

export const FeedTitle = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.title};
`;

export const FeedSubTitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

export const FeedInternalTexts = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
`;

export const ContainerInternalView = styled.div`
  display: flex;
  margin: 20px;
  flex: 1;
  flex-direction: column;
`;

export const Photo = styled.img`
  margin-top: 0.7rem;
  width: 50rem;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
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

export const FriendsContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  flex: 1;
  margin-top: 20px;
  background: ${props => props.theme.colors.backgroundCard};
  border-bottom-color: #000;
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
`;


export const FriendsTitle = styled.p`
  height: 5rem;
  width: 100%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFriendsItem = styled.div`
  margin-left: 2rem;
`;

export const AvatarFriendsItem = styled.img`
  height: 7rem;
`;

export const Item = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 2rem;
  border-bottom-color: ${props => props.theme.colors.tertiary};
  border-bottom-style: solid;
  border-bottom-width: 2px;
  background: ${props => props.theme.colors.backgroundCard};
`;

export const TextFriendContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items:center;
  display: flex;
  flex-direction: column;
`;
  
export const TextDescriptionFriendsItem = styled.p`
  text-align: center;
  font-size: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
`;


export const TextFriendsItem = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
`;
