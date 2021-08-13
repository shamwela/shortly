import React from 'react'
import styled from 'styled-components'

const StyledFeatureOverview = styled.div`
  display: grid;
  grid-row-gap: 1em;
`

export default function FeatureOverview() {
  return (
    <StyledFeatureOverview>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </StyledFeatureOverview>
  )
}
