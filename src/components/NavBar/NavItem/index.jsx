'use client'

import { useEffect, useState } from 'react'

import './NavItem.scss'

export default function NavItem({ isDarkMode, item, setOpen }) {
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    if (item) {
      setSlug(
        item
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      )
    }
  }, [item])

  if (!item) return null

  return (
    <li className='navItem'>
      <a
        href={`#${slug}`}
        style={isDarkMode ? { color: '#fff' } : { color: '#000' }}
        onClick={() => setOpen(false)}
      >
        {item}
      </a>
    </li>
  )
}
