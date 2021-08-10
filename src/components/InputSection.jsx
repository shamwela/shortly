import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Output from './Output'
import MobileBackground from '../assets/bg-shorten-mobile.svg'
import DesktopBackground from '../assets/bg-shorten-desktop.svg'
import '../utils/variables.css'

const borderRadius = '0.5rem'
// This is not put in variables.css because it is not used in any other component

const InputWrapper = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
  background: var(--dark-violet) url(${MobileBackground}) no-repeat right top;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;

  & > * {
    border-radius: ${borderRadius};
  }

  @media (min-width: 1440px) {
    background-image: url(${DesktopBackground});
    flex-direction: row;
    column-gap: 1rem;
    padding: 2rem;
  }
`

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
`

const Error = styled.span`
  color: var(--red);
`

export default function InputSection() {
  const [longLink, setLongLink] = useState('http://google.com')
  const [longLinks, setLongLinks] = useState([])
  const [shortLinks, setShortLinks] = useState([])
  const [error, setError] = useState('')

  const handleChange = ({ currentTarget }) => {
    // validate here
    setLongLink(currentTarget.value)
  }

  const handleSubmit = async () => {
    setError('')

    const finalUrl = 'https://api.shrtco.de/v2/shorten?url=' + longLink
    const response = await fetch(finalUrl)
    if (!response.ok) {
      setError('The link you entered is invalid.')
      return
    }

    const responseObject = await response.json()
    const { original_link, short_link } = responseObject.result

    setLongLinks((previousLongLinks) => [...previousLongLinks, original_link])
    setShortLinks((previousShortLinks) => [...previousShortLinks, short_link])
  }

  return (
    <>
      <InputWrapper>
        <Input
          value={longLink}
          onChange={handleChange}
          placeholder='Shorten a link here...'
        />
        <Error>{error}</Error>
        <Button disabled={longLink === ''} onClick={handleSubmit}>
          Shorten it!
        </Button>
      </InputWrapper>

      {shortLinks.map((shortLink, index) => (
        <Output
          longLink={longLinks[index]}
          shortLink={shortLink}
          key={shortLink}
        />
      ))}
    </>
  )
}
