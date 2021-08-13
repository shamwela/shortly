import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Error from './Error'
import Button from './Button'
import Output from './Output'
import MobileBackground from '../assets/bg-shorten-mobile.svg'
import DesktopBackground from '../assets/bg-shorten-desktop.svg'
import '../utils/variables.css'

const InputWrapper = styled.div`
  width: 100%;
  border-radius: var(--border-radius);
  background: var(--dark-violet) url(${MobileBackground}) no-repeat right top;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;

  & > * {
    border-radius: var(--border-radius);
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

export default function InputOutputSection() {
  const useStickyState = (defaultValue, key) => {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })

    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
  }

  const [longLink, setLongLink] = useState('')
  const [longLinks, setLongLinks] = useStickyState([], 'longLinks')
  const [shortLinks, setShortLinks] = useStickyState([], 'shortLinks')
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

    const { result } = await response.json()
    const { original_link, short_link } = result

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
        <Error message={error} />
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
