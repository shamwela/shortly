import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import '../variables.css'

const StyledNavigationBar = styled.nav`
  background-color: var(--cyan);
  width: 100%;
  height: 10vh;
  padding: 1rem 2rem;
`

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      <img src={logo} alt='Shortly Logo' />
    </StyledNavigationBar>
  )
}
