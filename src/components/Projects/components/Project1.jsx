'use client'
/* eslint-disable camelcase */

import { useRef, useState } from 'react'
import Image from 'next/image'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import './Project.scss'

export default function Project1() {
  const boxRef = useRef()

  const [showPicture, setShowPicture] = useState(null)

  const isClicked = (e) => {
    if (!boxRef.current.contains(e.target)) {
      setShowPicture(null)
    }
  }

  return (
    <div className='project'>
      <h2>CentralFoodMalaga</h2>
      <p>
        Aplicación web de restaurante de comida. La app tiene autenticación para
        poder registrarse e iniciar sesión con la finalidad que los clientes
        puedan hacer compras, tiene sistema de pago con tarjeta por medio de
        Stripe. El formulario de direcciones está integrado con google places y
        autocomplete para calcular la distancia y tiempo aproximado para la
        entrega de la orden. Se conecta con una aplicación de escritorio
        implementada con React y Electron en donde se puede gestionar el
        contenido, recibir los pedidos en tiempo real, ver estadísticas y crear
        cupones de descuento.
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image1')}
        >
          <Image
            src='/images/project1-1.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='central food málaga imagen 1'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <Image
            src='/images/project1-2.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='central food málaga imagen 2'
          />
        </button>
      </div>
      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>NextJs</li>
        <li>Stripe</li>
        <li>CSS modules</li>
        <li>Firebase</li>
      </ul>
      <p className='link'>
        Web:
        <a
          href='https://centralfoodmalaga.com'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          centralfoodmalaga.com
        </a>
      </p>
      <p className='link'>
        Repositorio:
        <a
          href='https://github.com/cjdev544/new-centralfood'
          rel='noopener noreferrer nofollow'
          target='_blank'
        >
          github.com/cjdev544/new-centralfood
        </a>
      </p>
      <div className='images'>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image3')}
        >
          <Image
            src='/images/project1-3.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='central food málaga imagen 3'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <Image
            src='/images/project1-4.jpg'
            className='projects-img'
            width={450}
            height={250}
            alt='central food málaga imagen 4'
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
                src='/images/project1-1.jpg'
                className='picture-item'
                width={1280}
                height={720}
                alt='central food málaga imagen 1'
              />
            )}
            {showPicture === 'image2' && (
              <Image
                src='/images/project1-2.jpg'
                className='picture-item'
                width={1280}
                height={720}
                alt='central food málaga imagen 2'
              />
            )}
            {showPicture === 'image3' && (
              <Image
                src='/images/project1-3.jpg'
                className='picture-item'
                width={1280}
                height={720}
                alt='central food málaga imagen 3'
              />
            )}
            {showPicture === 'image4' && (
              <Image
                src='/images/project1-4.jpg'
                className='picture-item'
                width={1280}
                height={720}
                alt='central food málaga imagen 4'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
