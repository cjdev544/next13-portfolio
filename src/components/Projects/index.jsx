'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import Modal from '@/components/Modal'
import './Projects.scss'

export default function Projects({ isDarkMode }) {
  const [openModal, setOpenModal] = useState(false)
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (!setOpenModal) setProject(null)
  }, [setOpenModal])

  const handleClick = (projectSelected) => {
    setProject(projectSelected)
    setOpenModal(true)
  }

  return (
    <section id='proyectos' className='projects container'>
      <span style={isDarkMode ? { color: '#fff' } : {}}>Algunos de mis</span>
      <h2>Proyectos</h2>
      <p>Puedes dar click sobre un proyecto y verlo más en profundidad</p>
      <div className='projects-items'>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project1')}
        >
          <Image
            src='/images/project1-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='web central food Málaga'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project2')}
        >
          <Image
            src='/images/project2-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='administrador central food Málaga'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project3')}
        >
          <Image
            src='/images/project3-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de facebook'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project4')}
        >
          <Image
            src='/images/project4-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de instagram'
          />
        </button>
      </div>
      {openModal && <Modal project={project} setOpenModal={setOpenModal} />}
    </section>
  )
}
