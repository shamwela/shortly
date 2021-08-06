import React from 'react'
import logo from '../assets/logo.svg'

export default function Logo() {
  return (
    // Reset line height to center vertically
    <a href='/' style={{ lineHeight: '0' }}>
      <img src={logo} alt='Shortly Logo' />
    </a>
  )
}
