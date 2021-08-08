import React from 'react'
import styled from 'styled-components'
import illustration from '../assets/illustration-working.svg'
import Button from './Button'

const MainWrapper = styled.article`
  width: 100%;
  height: 90vh; /* Navigation bar and Main Wrapper combined height should be 100vh */
  display: flex;
  flex-direction: column;
  padding-left: 1rem;

  & > * {
    flex-basis: 50%;
  }

  @media (min-width: 1440px) {
    height: 80vh;
    flex-direction: row-reverse;
    padding-left: 0;
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
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </TextWrapper>
    </MainWrapper>
  )
}
