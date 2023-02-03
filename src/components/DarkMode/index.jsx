'use client'

import { useState } from 'react'

import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import './DarkMode.scss'

export default function DarkMode({ setIsDarkMode }) {
  const [darkMode, setDarkMode] = useState(false)

  const changeStyleMode = () => {
    if (darkMode) {
      setDarkMode(false)
      setIsDarkMode(false)
    } else {
      setDarkMode(true)
      setIsDarkMode(true)
    }
  }

  return (
    <div className='toggle' onClick={changeStyleMode}>
      <Moon />
      <Sun />
      <div
        className='toggle-button'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}
