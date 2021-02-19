import Container from 'components/Container';
import Heading from 'components/Heading';
import React from 'react';
import { ConceptProp, ConceptsProps } from 'types/api';
import * as S from './styles';

const SectionConcepts = ({ title, concepts }: ConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((item: ConceptProp) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
);

export default SectionConcepts;
