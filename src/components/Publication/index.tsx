import React from 'react';

import { 
  TextInputPublication,
  ContentPublications,
  ButtonPublications,
  TextButtonPublications,
  ContentButtons,
} from './styles';

import {FaRegNewspaper} from 'react-icons/fa';
import {AiOutlineCamera} from 'react-icons/ai';
import {BsCameraVideo} from 'react-icons/bs';

export default () => (
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
);