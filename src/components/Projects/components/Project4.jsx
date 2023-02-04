'use client'
/* eslint-disable camelcase */

import { useRef, useState } from 'react'
import Image from 'next/image'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import './Project.scss'

export default function Project4() {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>Instagram clone</h2>
      <p>
        Clon de instagram. Aplicación que emula las caracteristicas basicas de
        instagram como, registro e inicio de sesión, edición del perfil, agregar
        o eliminar contactos, subir imagenes, crear comentarios, dar o quitar
        likes y gran parte de la interfaz de usuario.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <Image
            src='/images/project4-1.jpg'
            className='projects-img'
            width={450}
            height={500}
            alt='clone de instagram 1'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <Image
            src='/images/project4-2.jpg'
            className='projects-img'
            width={450}
            height={500}
            alt='clone de instagram 2'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <div className='fullstack'>
        <div>
          <p>CLIENTE</p>
          <ul>
            <li>React</li>
            <li>Apollo GraphQL</li>
            <li>SemanticUI</li>
            <li>Sass</li>
          </ul>
        </div>
        <div>
          <p>SERVIDOR</p>
          <ul>
            <li>Node</li>
            <li>Apollo GraphQL</li>
            <li>MongoDB</li>
            <li>Cloudinary</li>
          </ul>
        </div>
      </div>
      <p className='link'>
        Web:
        <a
          href='https://cjdev544-instaclone.vercel.app'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          instagram-clone
        </a>
      </p>
      <p className='link'>
        Repositorio Cliente:
        <a
          href='https://github.com/cjdev544/instaclone-client'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/instaclone-client
        </a>
      </p>
      <p className='link'>
        Repositorio Servidor:
        <a
          href='https://github.com/cjdev544/instaclone-server'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/instaclone-server
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <Image
            src='/images/project4-3.jpg'
            className='projects-img'
            width={450}
            height={500}
            alt='clone de instagram 3'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <Image
            src='/images/project4-4.jpg'
            className='projects-img'
            width={450}
            height={500}
            alt='clone de instagram 4'
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
                src='/images/project4-1.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de instagram imagen 1'
              />
            )}
            {showPicture === 'image2' && (
              <Image
                src='/images/project4-2.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de instagram imagen 2'
              />
            )}
            {showPicture === 'image3' && (
              <Image
                src='/images/project4-3.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de instagram imagen 3'
              />
            )}
            {showPicture === 'image4' && (
              <Image
                src='/images/project4-4.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='clone de instagram imagen 4'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
