import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { ModuleProps, ModulesProps } from 'types/api'

const SectionModules = ({modules}: ModulesProps) => (
  <Container>
    <Heading reverseColor>Módulos deste curso</Heading>

    <S.Content>
      {modules.map(({ title, subtitle, description }: ModuleProps, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
