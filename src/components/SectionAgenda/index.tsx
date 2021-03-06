import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import { AgendaProps } from 'types/api';

const SectionAgenda = ({ title, description }: AgendaProps) => (
  <Container id='agenda'>
    <Heading reverseColor>{title}</Heading>
    <S.Text>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </S.Text>
  </Container>
);

export default SectionAgenda;
