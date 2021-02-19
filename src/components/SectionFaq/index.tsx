import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { FaqProps, QuestionProp } from 'types/api'
import * as S from './styles'



const SectionFaq = ({title, questions}: FaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {questions.map(({ question, answer }: QuestionProp, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
