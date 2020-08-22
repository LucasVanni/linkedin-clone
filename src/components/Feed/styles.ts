import styled from 'styled-components';


export const ContainerFeed = styled.div`
  display: flex;
  flex: 1;
  border-radius: 1rem;
  margin: 20px 20px 0 20px;
  flex-direction: column;
  background: ${props => props.theme.colors.backgroundCard};
`;

export const FeedSubTitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
`;

export const AvatarImageFeed = styled.img`
  width: 5rem;
`;

export const FeedTitle = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.title};
`;

export const FeedTextsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;

export const FeedInternalTexts = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
`;

export const ContainerFeedAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0 0 2rem;
`;

export const ContainerInternalView = styled.div`
  display: flex;
  margin: 20px;
  flex: 1;
  flex-direction: column;
`;

export const Photo = styled.img`
  margin-top: 0.7rem;
  width: 100%;
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
  margin-right: 2rem;
  justify-content:center;
  align-items: center;
`;