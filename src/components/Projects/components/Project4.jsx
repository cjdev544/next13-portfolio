import { useRef, useState } from 'react'
import Image from 'next/image'
import XButton from '@iconscout/react-unicons/icons/uil-x'

import Project4_1 from '@/public/images/project4-1.jpg'
import Project4_2 from '@/public/images/project4-2.jpg'
import Project4_3 from '@/public/images/project4-3.jpg'
import Project4_4 from '@/public/images/project4-4.jpg'
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
            src={Project4_1}
            className='projects-img'
            width={450}
            alt='clone de instagram 1'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image2')}
        >
          <Image
            src={Project4_2}
            className='projects-img'
            width={450}
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
          cjdev544-instaclone.vercel.app
        </a>
      </p>
      <p className='link'></p>
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
      <p className='link'></p>
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
            src={Project4_3}
            className='projects-img'
            width={450}
            alt='clone de instagram 3'
          />
        </button>
        <button
          className='projects-items__card'
          onClick={() => setShowPicture('image4')}
        >
          <Image
            src={Project4_4}
            className='projects-img'
            width={450}
            alt='clone de instagram 4'
          />
        </button>
      </div>

      {showPicture && (
        <div className='picture' onClick={isClicked}>
          <div ref={boxRef}>
            <XButton
              color='white'
              size={'3rem'}
              className='picture-close'
              onClick={() => setShowPicture(null)}
            />
            {showPicture === 'image1' && (
              <Image
                src={Project4_1}
                className='picture-item'
                width={850}
                alt='clone de instagram imagen 1'
              />
            )}
            {showPicture === 'image2' && (
              <Image
                src={Project4_2}
                className='picture-item'
                width={850}
                alt='clone de instagram imagen 2'
              />
            )}
            {showPicture === 'image3' && (
              <Image
                src={Project4_3}
                className='picture-item'
                width={850}
                alt='clone de instagram imagen 3'
              />
            )}
            {showPicture === 'image4' && (
              <Image
                src={Project4_4}
                className='picture-item'
                width={850}
                alt='clone de instagram imagen 4'
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
