import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import MobileBackground from '../assets/bg-shorten-mobile.svg'
import '../utils/variables.css'

const borderRadius = '0.5rem'
// This is not put in variables.css because it is not used in any other component

const Wrapper = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  background: var(--dark-violet) url(${MobileBackground}) no-repeat right top;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem;

  & > * {
    width: 100%;
    border-radius: ${borderRadius};
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 1rem;
    padding: 2rem;
  }
`

const Input = styled.input`
  padding: 0.5rem 1rem;
`

const SubmitButton = styled(ButtonLink)``

export default function InputSection() {
  return (
    <Wrapper>
      <Input placeholder='Shorten a link here...' />
      <SubmitButton>Shorten it!</SubmitButton>
    </Wrapper>
  )
}
