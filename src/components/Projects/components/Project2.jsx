'use client'
/* eslint-disable camelcase */

import { useRef, useState } from 'react'
import Image from 'next/image'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import './Project.scss'

export default function Project2() {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>Administrador CentralFood</h2>
      <p>
        Aplicación de escritorio implementada con React, Electron y firebase.
        Esta App es el CMS de la página web centralfoodmalaga.com, se encarga de
        gestionar el contenido, recibir los pedidos en tiempo real, mostrar
        estadísticas de ventas, clientes y productos.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <Image
            src='/images/project2-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='administrador central food imagen 1'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <Image
            src='/images/project2-2.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='administrador central food imagen 2'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>React</li>
        <li>Electron</li>
        <li>Semantic UI</li>
        <li>Firebase</li>
      </ul>
      <p className='link'>
        Repositorio:
        <a
          href='https://github.com/cjdev544/electron-cfm-admin'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/electron-cfm-admin
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <Image
            src='/images/project2-3.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='administrador central food imagen 3'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <Image
            src='/images/project2-4.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='administrador central food imagen 4'
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
                src='/images/project2-1.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='administrador central food imagen 1'
              />
            )}
            {showPicture === 'image2' && (
              <Image
                src='/images/project2-2.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='administrador central food imagen 2'
              />
            )}
            {showPicture === 'image3' && (
              <Image
                src='/images/project2-3.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='administrador central food imagen 3'
              />
            )}
            {showPicture === 'image4' && (
              <Image
                src='/images/project2-4.jpg'
                className='picture-item'
                width={900}
                height={250}
                alt='administrador central food imagen 4'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
