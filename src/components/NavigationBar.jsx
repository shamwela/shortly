import React from 'react'
import styled from 'styled-components'
import MenuIcon from './MenuIcon'
import '../styles/variables.css'
import LinksWrapper from './LinksWrapper'
import Logo from './Logo'

const StyledNavigationBar = styled.nav`
  width: 100%;
  height: 10vh; /* Navigation bar and Main Wrapper combined height should be 100vh */
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
  const [menuOpened, setMenuOpened] = React.useState(false)

  return (
    <StyledNavigationBar>
      <Logo />
      <MenuIcon onClick={() => setMenuOpened(!menuOpened)} />
      <LinksWrapper menuOpened={menuOpened} />
    </StyledNavigationBar>
  )
}
