import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { AboutUsProps, AuthorsProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutUs = ({authors, title}: AboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((profile: AuthorsProps) => (
        <ProfileCard
          key={profile.name}
          name={profile.name}
          role={profile.role}
          image={getImageUrl(profile.photo.url)}
          socialLinks={profile.socialLinks}
          description={profile.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
