'use client'

import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

import NavItem from './NavItem'
import './Navbar.scss'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)

  const navItems = ['Servicios', 'Tecnologías', 'Proyectos', 'Contacto']

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header>
      <nav className='navbar container'>
        <div className='navbar-left'>
          <div className='navbar-left__name'>{'<CjDev544 />'}</div>
        </div>
        <div className='navbar-right'>
          <div className={`navbar-right__list ${isOpen ? 'isOpen' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <NavItem key={item} item={item} setOpen={setOpen} />
              ))}
            </ul>
          </div>
          <a
            href='#contacto'
            className='button navbar-button'
            onClick={closeMenu}
          >
            Contactame
          </a>
          <Hamburger
            direction='right'
            toggled={isOpen}
            toggle={setOpen}
            className='navbar-hamburger'
          />
        </div>
      </nav>
    </header>
  )
}
