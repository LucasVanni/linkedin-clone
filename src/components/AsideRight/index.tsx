import React from 'react';

import {
  FriendsContainer,
  FriendsTitle,
  ContainerFriendsItem,
  AvatarFriendsItem,
  Item,
  TextFriendContainer,
  TextDescriptionFriendsItem,
  TextFriendsItem,
  Container,
} from './styles';

import Avatar3 from '../../assets/avatar3.png';
import Avatar5 from '../../assets/avatar5.png';
import Avatar4 from '../../assets/avatar4.png';

export default () => {
  return (
    <aside className="aside-right">
      <Container>
      <FriendsContainer>
        <FriendsTitle>
          People you may know
        </FriendsTitle>
      </FriendsContainer>
        <ContainerFriendsItem>
          <Item>
            <AvatarFriendsItem src={Avatar3} />
            <TextFriendContainer>
              <TextFriendsItem>
                Jhon
              </TextFriendsItem>
              <TextDescriptionFriendsItem>
                UI/UX Designer
              </TextDescriptionFriendsItem>
            </TextFriendContainer>
        </Item>
        <Item>
          <AvatarFriendsItem src={Avatar4} />
            <TextFriendContainer>
              <TextFriendsItem>
                Ana
              </TextFriendsItem>
              <TextDescriptionFriendsItem>
                Looking for Team
              </TextDescriptionFriendsItem>
            </TextFriendContainer>
        </Item> 
        <Item>
          <AvatarFriendsItem src={Avatar5} />
          <TextFriendContainer>
            <TextFriendsItem>
              Amanda
            </TextFriendsItem>
            <TextDescriptionFriendsItem>
              Recruiter - Orange
            </TextDescriptionFriendsItem>
          </TextFriendContainer>
        </Item>
      </ContainerFriendsItem>
      </Container>
    </aside> 
  )
}