import React from 'react';

import Avatar from '../../assets/avatar.png';

import {
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
} from './styles';

import {FiLink} from 'react-icons/fi';

export default () => {
  
  return (
    <aside className="aside-left">
      <UserNameContainer>
        <AvatarImage src={Avatar} />
        <UserNameText>
          Avatar Astolfo
        </UserNameText>
        <ProfessionalizationAreaText>
          UI/UX Designer
        </ProfessionalizationAreaText>
        <LinkLinkedIn >
          <FiLink className="link" size={14} />
          <a href="https://www.linkedin.com">
            htttp://linkedin.com
          </a>
        </LinkLinkedIn>
      </UserNameContainer>

      <NumbersContent>
        <NumberRight>
          <TextNumber>767</TextNumber>
          <TextContent>Connections</TextContent>
        </NumberRight>
        <NumberLeft>
          <TextNumber>60</TextNumber>
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
  );
}