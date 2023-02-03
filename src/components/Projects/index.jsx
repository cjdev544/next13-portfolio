'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import Project1 from '@/public/images/project1-1.jpg'
import Project2 from '@/public/images/project2-1.jpg'
import Project3 from '@/public/images/project3-1.jpg'
import Project4 from '@/public/images/project4-1.jpg'
import Modal from '@/components/Modal'
import './Projects.scss'

export default function Projects() {
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
      <span>Algunos de mis</span>
      <h2>Proyectos</h2>
      <p>Puedes dar click sobre un proyecto y verlo mas en profundidad</p>
      <div className='projects-items'>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project1')}
        >
          <Image
            src={Project1}
            className='projects-img'
            width={450}
            alt='web central food Málaga'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project2')}
        >
          <Image
            src={Project2}
            className='projects-img'
            width={450}
            alt='administrador central food Málaga'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project3')}
        >
          <Image
            src={Project3}
            className='projects-img'
            width={450}
            alt='clone de facebook'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => handleClick('project4')}
        >
          <Image
            src={Project4}
            className='projects-img'
            width={450}
            alt='clone de instagram'
          />
        </button>
      </div>
      {openModal && <Modal project={project} setOpenModal={setOpenModal} />}
    </section>
  )
}
