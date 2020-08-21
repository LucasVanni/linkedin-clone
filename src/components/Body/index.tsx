import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components';

import Avatar from '../../assets/avatar.png';
import Avatar3 from '../../assets/avatar3.png';
import Avatar5 from '../../assets/avatar5.png';
import Avatar4 from '../../assets/avatar4.png'
import User2 from '../../assets/user2.png';
import ImagePhoto from '../../assets/postImage.jpg';

import { 
  Container, 
  AvatarImage,
  UserNameContainer,
  UserNameText,
  ProfessionalizationAreaText,
  LinkLinkedIn,
  NumbersContent,
  NumberRight,
  NumberLeft,
  TextNumber,
  TextContent,
  PremiumContainer,
  PremiumText,
  PremiumButton,
  PremiumButtonText,
  TextInputPublication,
  ContentPublications,
  ButtonPublications,
  TextButtonPublications,
  ContentButtons,
  ContainerFeed,
  FriendsContainer,
  AvatarImageFeed,
  FeedTitle,
  FeedTextsContainer,
  FeedSubTitle,
  FeedInternalTexts,
  ContainerFeedAvatar,
  ContainerInternalView,
  Photo,
  ContainerIcons,
  TextsIcons,
  ContainerInternalIcons,
  FriendsTitle,
  ContainerFriendsItem,
  TextFriendsItem,
  Item,
  AvatarFriendsItem,
  TextFriendContainer,
  TextDescriptionFriendsItem
} from './styles';

import {FiLink, FiMessageCircle} from 'react-icons/fi';
import {FaRegNewspaper} from 'react-icons/fa';
import {AiOutlineCamera, AiTwotoneHeart, AiOutlineShareAlt} from 'react-icons/ai';
import {BsCameraVideo} from 'react-icons/bs';

  
export default () => {
    const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <aside className="aside-left">
        <UserNameContainer colorText={colors.tertiary} colorBackground={colors.backgroundCard} >
          <AvatarImage src={Avatar} />
          <UserNameText>
            Avatar Astolfo
          </UserNameText>
          <ProfessionalizationAreaText colorText={colors.textSecondary}>
            UI/UX Designer
          </ProfessionalizationAreaText>
          <LinkLinkedIn colorText={colors.textSecondary} >
            <FiLink className="link" color={colors.primary} size={14} />
            <a href="https://www.linkedin.com">
              htttp://linkedin.com
            </a>
          </LinkLinkedIn>
        </UserNameContainer>

        <NumbersContent colorBackground={colors.backgroundCard} >
          <NumberRight colorLine={colors.tertiary} >
            <TextNumber>767</TextNumber>
            <TextContent>Connections</TextContent>
          </NumberRight>
          <NumberLeft>
            <TextNumber colorText={colors.text}>60</TextNumber>
            <TextContent>Views</TextContent>
          </NumberLeft>
        </NumbersContent>

        <PremiumContainer>
          <PremiumText>
            Free access exclusive tools & insights
          </PremiumText>
          <PremiumButton>
            <PremiumButtonText>
              UPGRADE TO PREMIUM
            </PremiumButtonText>
          </PremiumButton>
        </PremiumContainer>

      </aside> 
      <main>
        <section className="publication">
          <ContentPublications>
            <TextInputPublication 
              placeholder="Write here. Add images or a video for visual impact." 
            />
          </ContentPublications>
          <ContentButtons>
            <ButtonPublications>
              <FaRegNewspaper size={25} />
              <TextButtonPublications>
                Article
              </TextButtonPublications>
            </ButtonPublications>
            <ButtonPublications>
              <AiOutlineCamera  size={25} />
              <TextButtonPublications>
                Image
              </TextButtonPublications>
            </ButtonPublications>
            <ButtonPublications>
              <BsCameraVideo size={25} />
              <TextButtonPublications>
                Vídeo
              </TextButtonPublications>
            </ButtonPublications>
          </ContentButtons>
        </section>       

        <section className="feed">
          <ContainerFeed>
            <ContainerFeedAvatar>
              <AvatarImageFeed src={User2} />
              <FeedTextsContainer>
                <FeedTitle>Harry Potter</FeedTitle>
                <FeedSubTitle>CEO specialist</FeedSubTitle>
              </FeedTextsContainer>
            </ContainerFeedAvatar>
            <ContainerInternalView>
              <FeedInternalTexts>
                Hi community,
                <br />
                I'm looking for Java Full Stack and Test Automation (Java/JavaScript) Engineers in United States. Ask me in DM about details.
              </FeedInternalTexts>
            
              <Photo src={ImagePhoto} />
              
              <ContainerIcons>
                <ContainerInternalIcons>
                  <AiTwotoneHeart size={25} color="#f00" />
                  <TextsIcons>
                    36
                  </TextsIcons> 
                </ContainerInternalIcons>
                <ContainerInternalIcons>
                  <FiMessageCircle size={25} color={colors.textSecondary} />
                  <TextsIcons>
                    12
                  </TextsIcons> 
                </ContainerInternalIcons>
                <ContainerInternalIcons>
                  <AiOutlineShareAlt size={25} color={colors.textSecondary} />
                  <TextsIcons>
                      Share
                  </TextsIcons> 
                </ContainerInternalIcons>
              </ContainerIcons>
            </ContainerInternalView>

          </ContainerFeed>

          <ContainerFeed>
            <ContainerFeedAvatar>
              <AvatarImageFeed src={User2} />
              <FeedTextsContainer>
                <FeedTitle>Harry Potter</FeedTitle>
                <FeedSubTitle>CEO specialist</FeedSubTitle>
              </FeedTextsContainer>
            </ContainerFeedAvatar>
            <ContainerInternalView>
              <FeedInternalTexts>
                Hi community,
                <br />
                I'm looking for Java Full Stack and Test Automation (Java/JavaScript) Engineers in United States. Ask me in DM about details.
              </FeedInternalTexts>
            
              <Photo src={ImagePhoto} />
              
              <ContainerIcons>
                <ContainerInternalIcons>
                  <AiTwotoneHeart size={25} color="#f00" />
                  <TextsIcons>
                    36
                  </TextsIcons> 
                </ContainerInternalIcons>
                <ContainerInternalIcons>
                  <FiMessageCircle size={25} color={colors.textSecondary} />
                  <TextsIcons>
                    12
                  </TextsIcons> 
                </ContainerInternalIcons>
                <ContainerInternalIcons>
                  <AiOutlineShareAlt size={25} color={colors.textSecondary} />
                  <TextsIcons>
                      Share
                  </TextsIcons> 
                </ContainerInternalIcons>
              </ContainerIcons>
            </ContainerInternalView>

          </ContainerFeed>


        </section>
      </main> 
      <aside className="aside-right">
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
      </aside> 
    </Container>
  );
}
