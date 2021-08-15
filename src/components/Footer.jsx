import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import '../utils/variables.css'

const Wrapper = styled.footer`
  height: 100vh;
  background-color: var(--very-dark-violet);

  @media (min-width: 1440px) {
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <Logo color='light' />
    </Wrapper>
  )
}
