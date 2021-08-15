import React from 'react'
import styled from 'styled-components'
import MobileBackground from '../assets/bg-boost-mobile.svg'
import DesktopBackground from '../assets/bg-boost-desktop.svg'
import '../utils/variables.css'
import Button from './Button'

const Wrapper = styled.div`
  min-height: 30vh;
  background: var(--dark-violet) url(${MobileBackground}) no-repeat left center;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-content: center;
  grid-row-gap: 1rem;

  @media (min-width: 1440px) {
    background-image: url(${DesktopBackground});
  }
`

const Heading = styled.h3`
  color: white;
`

const StyledButton = styled(Button)`
  width: max-content;
`

export default function BottomCallToAction() {
  return (
    <Wrapper>
      <Heading>Boost your links today</Heading>
      <StyledButton>Get Started</StyledButton>
    </Wrapper>
  )
}
