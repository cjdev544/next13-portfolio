'use client'

import { useEffect, useState } from 'react'

import './NavItem.scss'

export default function NavItem({ item, setOpen }) {
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
      <a href={`#${slug}`} onClick={() => setOpen(false)}>
        {item}
      </a>
    </li>
  )
}
