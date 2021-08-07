import React from 'react'
import styled from 'styled-components'
import illustration from '../assets/illustration-working.svg'
import H1 from './H1'
import P from './P'
import ButtonLink from './ButtonLink'

const MainWrapper = styled.article`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  /* The hero image should not have right padding */

  & > * {
    flex-basis: 50%;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`

const HeroImage = styled.img`
  object-position: 0 100%; /* Crop the right part */
`

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding-right: 1rem;

  @media (min-width: 1440px) {
    padding: 8rem 5rem;
    align-items: flex-start;
    text-align: left;
  }
`

export default function Intro() {
  return (
    <MainWrapper>
      <HeroImage src={illustration} alt='A person working using a computer' />
      <TextWrapper>
        <H1>More than just shorter links</H1>
        <P>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </P>
        <ButtonLink href='/'>Get Started</ButtonLink>
      </TextWrapper>
    </MainWrapper>
  )
}
