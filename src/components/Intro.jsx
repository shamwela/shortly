import React from 'react'
import styled from 'styled-components'
import illustration from '../assets/illustration-working.svg'
import Button from './Button'

const MainWrapper = styled.div`
  width: 100%;
  height: 90vh; /* Navigation bar and Main Wrapper combined height should be 100vh */
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & > * {
    flex-grow: 1;
  }

  @media (min-width: 1440px) {
    height: 80vh;
    flex-direction: row-reverse;
    column-gap: 1rem;
  }
`

const HeroImage = styled.img`
  /* This image should not have right padding */
  object-position: 0 100%; /* Crop the right part */
`

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (min-width: 1440px) {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    row-gap: 1.2rem;
  }
`

const CallToActionButton = styled(Button)`
  width: max-content;
`

export default function Intro() {
  return (
    <MainWrapper>
      <HeroImage src={illustration} alt='A person working using a computer' />
      <TextWrapper>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <CallToActionButton>Get Started</CallToActionButton>
      </TextWrapper>
    </MainWrapper>
  )
}
