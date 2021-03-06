import React from 'react'
import styled from 'styled-components'
import FeatureInfo from './FeatureInfo'
import FeatureOverview from './FeatureOverview'
import BrandRecognition from '../assets/icon-brand-recognition.svg'
import DetailedRecords from '../assets/icon-detailed-records.svg'
import FullyCustomizable from '../assets/icon-fully-customizable.svg'
import '../utils/variables.css'

const StyledFeatureSection = styled.div`
  background-color: var(--gray);
  /* Since Navigation Bar's left and right paddings are 5rem */
  padding: 2rem 1rem 5rem 1rem;

  @media (min-width: 1440px) {
    padding: 2rem 5rem 5rem 5rem;
  }
`

const FeatureInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export default function FeatureSection() {
  return (
    <StyledFeatureSection>
      <FeatureOverview />
      <FeatureInfoWrapper>
        <FeatureInfo
          imageSource={BrandRecognition}
          title='Brand Recognition'
          description='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
        />

        <FeatureInfo
          imageSource={DetailedRecords}
          title='Detailed Records'
          description='Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.'
        />

        <FeatureInfo
          imageSource={FullyCustomizable}
          title='Fully Customizable'
          description='Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.'
        />
      </FeatureInfoWrapper>
    </StyledFeatureSection>
  )
}
