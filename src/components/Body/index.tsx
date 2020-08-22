import React from 'react';

import { 
  Container,
} from './styles';

import AsideLeft from '../AsideLeft';
import AsideRight from '../AsideRight';
import Publication from '../Publication';
import Feed from '../Feed';


export default () => (
  <Container>
    <AsideLeft />
    <main>
      <Publication />
      <Feed />
    </main> 
    <AsideRight />
  </Container>
);
