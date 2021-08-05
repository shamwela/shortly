import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import '../styles/variables.css'
import Menu from './Menu'

const StyledNavigationBar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
`

const LinksWrapper = styled.div`
  position: absolute;
  top: 10vh;
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
`

const SeparatorLine = styled.hr`
  align-self: stretch;
`

const SignUpLink = styled.a`
  background-color: var(--cyan);
  border-radius: 100px;
  padding: 0.8em;
  text-align: center;
  align-self: stretch;
`

export default function NavigationBar() {
  return (
    <>
      <StyledNavigationBar>
        <img src={logo} alt='Shortly Logo' />
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
    </>
  )
}
