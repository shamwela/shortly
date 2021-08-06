import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import ButtonLink from './ButtonLink'
import logo from '../assets/logo.svg'
import '../styles/variables.css'

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

const LinksWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  min-height: 50vh;
  background-color: var(--dark-violet);
  border-radius: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: 1440px) {
    position: static;
    width: 100%;
    min-height: auto;
    background-color: transparent;
    flex-direction: row;

    & > a {
      padding-left: 2rem;
      padding-right: 2rem;
      color: var(--very-dark-blue);
    }

    a:nth-child(3) {
      margin-right: auto;
    }
  }
`

const SeparatorLine = styled.hr`
  align-self: stretch;

  @media (min-width: 1440px) {
    display: none;
  }
`

const SignUpLink = styled(ButtonLink)`
  align-self: stretch;
`

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      {/* Reset line height to center vertically */}
      <a href='/' style={{ lineHeight: '0' }}>
        <img src={logo} alt='Shortly Logo' />
      </a>
      <Menu />
      <LinksWrapper>
        <a href='/'>Features</a>
        <a href='/'>Pricing</a>
        <a href='/'>Resources</a>
        <SeparatorLine />
        <a href='/'>Login</a>
        <SignUpLink href='/'>Sign Up</SignUpLink>
      </LinksWrapper>
    </StyledNavigationBar>
  )
}
