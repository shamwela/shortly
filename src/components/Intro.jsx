import React from 'react'
import styled from 'styled-components'
import HeroImage from './HeroImage'
import H1 from './H1'
import P from './P'
import ButtonLink from './ButtonLink'

const Container = styled.div`
  height: 90vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Intro() {
  return (
    <Container>
      <HeroImage />
      <Wrapper>
        <H1>More than just shorter links</H1>
        <P>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </P>
        <ButtonLink href='/'>Get Started</ButtonLink>
      </Wrapper>
    </Container>
  )
}
