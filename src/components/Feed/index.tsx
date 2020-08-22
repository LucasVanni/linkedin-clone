import React, {useContext} from 'react';
import { ThemeContext } from 'styled-components';

import {
  ContainerFeed,
  FeedSubTitle,
  AvatarImageFeed,
  FeedTitle,
  FeedTextsContainer,
  FeedInternalTexts,
  ContainerFeedAvatar,
  ContainerInternalView,
  Photo,
  ContainerIcons,
  TextsIcons,
  ContainerInternalIcons,
} from './styles';

import User2 from '../../assets/user2.png';
import ImagePhoto from '../../assets/postImage.jpg';

import {AiTwotoneHeart, AiOutlineShareAlt} from 'react-icons/ai';
import {FiMessageCircle} from 'react-icons/fi';

export default () => {
  const { colors } = useContext(ThemeContext);

  return (
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
  )
}