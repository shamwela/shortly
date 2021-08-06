import React from 'react'
import styled from 'styled-components'
import MenuIcon from './MenuIcon'
import '../styles/variables.css'
import LinksWrapper from './LinksWrapper'
import Logo from './Logo'

const StyledNavigationBar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;

  @media (min-width: 1440px) {
    height: 20vh;
    padding: 1rem 5rem;
  }
`

export default function NavigationBar() {
  const [opened, setOpened] = React.useState(false)

  return (
    <StyledNavigationBar>
      <Logo />
      <MenuIcon onClick={() => setOpened(!opened)} />
      {opened && <LinksWrapper />}
    </StyledNavigationBar>
  )
}
