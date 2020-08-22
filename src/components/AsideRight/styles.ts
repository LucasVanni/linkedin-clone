import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 2rem;
`;

export const FriendsContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  flex: 1;
  margin-top: 20px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.backgroundCard};
  border-bottom-color: ${props => props.theme.colors.tertiary};
  border-bottom-style: solid;
  border-bottom-width: 0.2rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
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

export const TextFriendsItem = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
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
  
  :last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export const AvatarFriendsItem = styled.img`
  height: 7rem;
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
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
`;
