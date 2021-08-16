import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Facebook from '../../assets/icon-facebook.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Pinterest from '../../assets/icon-pinterest.svg'
import Instagram from '../../assets/icon-instagram.svg'
import '../../utils/variables.css'

const Wrapper = styled.footer`
  min-height: 100vh;
  background-color: var(--very-dark-violet);
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
  grid-gap: 3rem;
  padding: 1rem;

  & * {
    font-size: 0.8rem;
    color: white;
  }

  @media (min-width: 1440px) {
    min-height: 40vh;
    padding: 2rem 5rem;
    grid-template-columns: 3fr 1fr 1fr 1fr 2fr;
    justify-items: start;
    align-items: start;
    text-align: left;
  }
`

const LinksWrapper = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`

const Title = styled.strong`
  text-transform: uppercase;
`

const Link = styled.a`
  color: var(--gray);
`

const LogoWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`

export default function Footer() {
  return (
    <Wrapper>
      <Logo color='light' />

      <LinksWrapper>
        <Title>Features</Title>
        <Link href='/'>Link Shortening</Link>
        <Link href='/'>Branded Links</Link>
        <Link href='/'>Analytics</Link>
      </LinksWrapper>

      <LinksWrapper>
        <Title>Resources</Title>
        <Link href='/'>Blog</Link>
        <Link href='/'>Developers</Link>
        <Link href='/'>Support</Link>
      </LinksWrapper>

      <LinksWrapper>
        <Title>Company</Title>
        <Link href='/'>About</Link>
        <Link href='/'>Our Team</Link>
        <Link href='/'>Careers</Link>
        <Link href='/'>Contact</Link>
      </LinksWrapper>

      <LogoWrapper>
        <a href='/'>
          <img src={Facebook} alt='Facebook' />
        </a>
        <a href='/'>
          <img src={Twitter} alt='Twitter' />
        </a>
        <a href='/'>
          <img src={Pinterest} alt='Pinterest' />
        </a>
        <a href='/'>
          <img src={Instagram} alt='Instagram' />
        </a>
      </LogoWrapper>
    </Wrapper>
  )
}
