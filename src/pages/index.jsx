import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../components/Nav/NavigationBar'
import Intro from '../components/Intro'
import InputOutputSection from '../components/InputOutputSection'

const Main = styled.main`
  /* Since Navigation Bar's left and right paddings are 5rem */
  padding: 0 1rem 5rem 1rem;

  @media (min-width: 1440px) {
    padding: 0 5rem 5rem 5rem;
  }
`

export default function Shortly() {
  return (
    <>
      <NavigationBar />

      <Main>
        <Intro />
        <InputOutputSection />
      </Main>
    </>
  )
}
