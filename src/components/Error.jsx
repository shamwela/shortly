import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '../utils/variables.css'

const StyledError = styled.span`
  font-size: 0.8rem;
  color: var(--red);
`

export default function Error({ message }) {
  return <StyledError>{message}</StyledError>
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
