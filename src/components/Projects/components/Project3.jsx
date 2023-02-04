'use client'
/* eslint-disable camelcase */

import { useRef, useState } from 'react'
import Image from 'next/image'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import './Project.scss'

export default function Project3() {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>Facebook clone</h2>
      <p>
        Clon de facebook. Aplicación que emula las caracteristicas basicas de
        facebook como, registro e inicio de sesión, edición del perfil, agregar
        o eliminar contactos, crear posts con imagenes y emojis, dar o quitar
        likes y gran parte de la interfaz de usuario.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <Image
            src='/images/project3-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de facebook 1'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <Image
            src='/images/project3-2.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de facebook 2'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>NextJs</li>
        <li>Tailwind</li>
        <li>Firebase</li>
      </ul>
      <p className='link'>
        Web:
        <a
          href='https://facebook-clone-two-blond.vercel.app'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          facebook-clone
        </a>
      </p>

      <p className='link'>
        Repositorio:
        <a
          href='https://github.com/cjdev544/facebook-clone'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/facebook-clone
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <Image
            src='/images/project3-3.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de facebook 3'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <Image
            src='/images/project3-4.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='clone de facebook 4'
          />
        </button>
      </div>

      {showPicture && (
        <div className='picture' onClick={isClicked}>
          <div ref={boxRef}>
            <XButton
              color='white'
              // eslint-disable-next-line react/jsx-curly-brace-presence
              size={'3rem'}
              className='picture-close'
              onClick={() => setShowPicture(null)}
            />
            {showPicture === 'image1' && (
              <Image
                src='/images/project3-1.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de facebook imagen 1'
              />
            )}
            {showPicture === 'image2' && (
              <Image
                src='/images/project3-2.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de facebook imagen 2'
              />
            )}
            {showPicture === 'image3' && (
              <Image
                src='/images/project3-3.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de facebook imagen 3'
              />
            )}
            {showPicture === 'image4' && (
              <Image
                src='/images/project3-4.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de facebook imagen 4'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
